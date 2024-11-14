import React from "react";
import { useParams } from "react-router-dom";

function ReviewWrite() {
  const { id } = useParams();

  return (
    <div>
      <p>글쓰기 화면</p>
      <p>받은 ID: {id}</p>
    </div>
  );
}

export default ReviewWrite;
