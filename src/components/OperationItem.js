import React from "react";

const InfoHeader = ({ data }) => <div className="operation-item">
    <div className="name" >{data.name}</div>
    <div className="desc" >{data.desc}</div>
</div>;

export default InfoHeader;