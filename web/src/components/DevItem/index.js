import React from 'react';

import { Edit, Delete, GitHub } from '@material-ui/icons';
import { Button, ButtonGroup } from '@material-ui/core';

import './styles.css';

function DevItem({ dev, onDeleteForm, onUpdateClick }) {
  const { _id, avatar_url, name, techs, github_username, bio } = dev;

  async function handleDelete() {
    await onDeleteForm({ _id, github_username })
  }

  async function handleUpdateState() {
    await onUpdateClick({ _id, github_username })
  }
  return(
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <ButtonGroup variant="contained" aria-label="contained primary button group">
        <Button onClick={() => window.open(`https://github.com/${github_username}`, "_blank")} color="primary" size="small" ><GitHub id="github-btn" fontSize="default" /></Button>
        <Button size="small" color="primary" onClick={handleUpdateState} ><Edit fontSize="default" /></Button>
        <Button size="small" color="secondary" onClick={handleDelete} ><Delete fontSize="default" /></Button>
      </ButtonGroup>
    </li>
  )
}

export default DevItem;
