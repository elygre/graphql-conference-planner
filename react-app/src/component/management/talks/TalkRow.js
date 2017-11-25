import {propType} from 'graphql-anywhere';
import React from 'react';
import {Link} from 'react-router-dom';
import {timeToInput} from '../../../utils/index';
import TalkOverview from '../../talk/TalkOverview';

const TalkRow = ({
                   deleteTalk,
                   talk: {
                     id,
                     title,
                     room,
                     startsAt
                   }
                 }) => <tr>
  <th>{id}</th>
  <th>{title}</th>
  <td>{room}</td>
  <td>{timeToInput(startsAt)}</td>
  <td>
    <Link
      className="button is-info is-outlined"
      to={`/secure/talk/${id}/speakers`}
    >Manage Speakers</Link>
  </td>
  <td>
    <Link
      to={`/secure/talk/${id}`}
      className="button is-primary is-outlined"
    >Edit</Link>
  </td>
  <td>
    <a
      className="button is-danger is-outlined"
      onClick={() => deleteTalk(id)}
    >Delete</a>
  </td>
</tr>;

TalkRow.propTypes = {
  conference: propType(TalkOverview.fragments.talk)
};


export default TalkRow;