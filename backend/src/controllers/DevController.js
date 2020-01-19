const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket')

module.exports = {

    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        
        const{ github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev);

        }
        return response.json(dev);
    },

    async update(request, response){

        try{

            const { github_username } = request.query;

            const { bio, techs, avatar_url, longitude, latitude } = request.body;

            let techsArray;

            if(techs){
                techsArray = parseStringAsArray(techs);
            }

            let location;

            if(longitude && latitude){
                location = {
                    type: "Point",
                    coordinates: [longitude, latitude]
                }
            }

            const conditions = { github_username: github_username };

            const update = {
                avatar_url,
                bio,
                techs: techsArray,
                location
            };

            const options = {
                new: true,
                omitUndefined: true
            };

            const dev = await Dev.findOneAndUpdate(conditions, update, options);

            if (!dev) {

                return response.status(404).send();

              }
        
            return response.status(200).json(dev);

        } catch (error) {

            response.status(400).send(error);

        }
    },

    async destroy(request, response){

        try{

            const { github_username } = request.query;

            const conditions = { github_username: github_username };

            const dev = await Dev.findOneAndDelete(conditions);

            if (!dev) {
            
                return response.status(404).send();

              }
        
            return response.status(200).json(dev);
        
        } catch (error) {

            response.status(400).send(error);

        }
    }
};