# Overview
Node.js-based API, developed to handle requests from the Frontend and Mobile, execute CRUDs (MongoDB + Mongoose) and send responses to both endpoints.
Backend developed using the concept of DRY (Don't Repeat Yourself) and MVC architecture.

# Devs Schema

```js
{
  "_id": "<entity Id>",
  "github": "<github_username>",
  "name": "<userName>",
  "bio": "<bio>",
  "avatar_url": "<gitHubAvatar_url>",
  "techs": [ "<Techs>", "<Array>" ],
  "location": {
    "coordinates": [
      <Longitude>,
      <Latitude>
    ]
  },
}
```
# Controllers
API Methods, params and responses

## Devs
Developers storeds in the database:

| Method       | Rout                | Action                                | Params              | Response      |
| ------------ | ------------------- | ------------------------------------- | ------------------- | ------------- |
| ![GET]       | `/api/devs`         | List all Devs                         | **None**            | JSON/User     |
| ![POST]      | `/api/devs`         | Insert a Dev on the Database          | JSON/git,techs,geo  | JSON/User     |
| ![GET]       | `/api/devs/:github` | Return a specif Dev                   | Rout/github_username| JSON/User     |
| ![PUT]       | `/api/devs/:github` | Edit data from Dev                    | Rout + JSON/fields  | JSON/OK       |
| ![DELETE]    | `/api/devs/:github` | Delete a record                       | Rout                | 200 OK        |

## Search
Controller used to search Devs when a user press the location button on the mobile end.
Filter: 10km range from the middle of the screen and specified techs.

| Method       | Rout          | Action            | Params                         | Response      |
| ------------ | ------------- | ----------------- | ------------------------------ | ------------- |
| ![GET]       | `/api/search` | Search for Devs   | Query/techs,latitude,longitude | JSON/Users    |
