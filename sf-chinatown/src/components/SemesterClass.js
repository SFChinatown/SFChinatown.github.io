import React from 'react';
import './SemesterClass.css';

/**
 * 
 * @param {map} props Contains information for all required fields.
 * @param {boolean} props.current Optional field. True if provided semester is current.
 * @param {string} props.semester The semester provided information relates to.
 * @param {gsi} props.gsi Name of the GSI for the semester.
 * @param {array} props.groups An array containing the name of the group (name) and a list of group members (people)
 * @returns 
 */

function SemesterClass(props) {
  const groupInfo = props.groups.map((group) =>
    <div className="group">
      <p className='group-name'>{group.name}</p>
      <div className='group-members'>
        {group.people.map((name) =>
        <p>{name}</p>
      )}
      </div>
    </div>
  )

  return (
    <div className={`semester-info ${props.current ? "active" : ""}`}>
      <p className="semester-title">{props.semester}</p>
      <div className="gsi-info">
        <p className="gsi-title">GSI</p>
        <p className="gsi-name">{props.gsi}</p>
      </div>
      <div className="groups">
      {groupInfo}
      </div>
    </div>
  );
}

export default SemesterClass;