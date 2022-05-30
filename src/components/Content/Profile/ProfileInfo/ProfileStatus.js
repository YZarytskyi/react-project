import React, { useEffect, useState } from "react";
import style from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateMode = () => {
    setEditMode(true)
  }

  const deactivateMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className={style.status} >
    {!editMode
    ?
    <div>
      <span onClick={activateMode}>{props.status || '----'}</span>
    </div>
    :
    <div>
      <input className={style.input} onChange={onStatusChange}
      autoFocus={true} onBlur={deactivateMode} value={status} />
    </div>}
    </div>
  );
}

export default ProfileStatus;
