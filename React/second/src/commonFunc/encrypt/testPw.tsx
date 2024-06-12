import { useState } from "react";
import { hashPw } from "./hashPw";
import axios from "axios";

// 다른 컴포넌트에서 사용할 때 예시
const TestPw = () => {
  const [password, setPassword] = useState("");
  const [hashedPw, setHashedPw] = useState("");

  const handleHashPassword = async () => {
    const hash = hashPw(password);
    setHashedPw(hash);

    try {
      const response = await axios.post("http://your-api-url.com", {
        hashedPw: hash,
      });
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error sending hashed password to server:", error);
    }
  };

  return (
    <>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호를 입력하세요"
      />
      <button onClick={handleHashPassword}>비밀번호 입력</button>
    </>
  );
};
export default TestPw;
