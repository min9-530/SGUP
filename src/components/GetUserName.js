import { useState } from "react";
import GithubUserInfo from "./GithubUserInfo";

function GetUserName() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="검색하고싶은 유저의 아이디를 입력하세요."
        type="text"
        value={value}
        onChange={onChange}
      />
      <GithubUserInfo username={value} />
    </div>
  );
}

export default GetUserName;
