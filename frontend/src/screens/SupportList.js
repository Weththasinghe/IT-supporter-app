import React,{ useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { supporterListAction } from "../action/supportersAction";

const SupportList = () => {
  const dispatch = useDispatch();

  const supporterList = useSelector((store)=>store.supporterList)
  console.log(supporterList.suportors)


  useEffect(()=>{
    dispatch(supporterListAction())
  },[dispatch])

  return (
    <div>
      <div>Click Button</div>
      {/* <button onClick={}>Click Me</button> */}
    </div>
  );
};

export default SupportList;
