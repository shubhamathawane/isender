import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import QRcode from "qrcode";
import { axiosInstance } from "../config";

const Container = styled.div`
  background-color: ${({theme}) => theme.bg};
  box-sizing: border-box;
  color: ${({theme}) => theme.text};
  display: flex;
  flex-direction: column;
  font-family: jetBrains Mono;
  justify-items: center;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Input = styled.input`
  padding: 21px;
  font-size: 18px;
  /* font-family: "Courier New", Courier, monospace; */
  border-radius: 15px;
  resize: vertical;
  box-sizing: border-box; 

  height: 10px;
  width: 30rem;
  color:${({theme}) => theme.text};
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.text};

  @media screen and (max-width: 768px) {
    width:auto;
   }
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
    font-family: jetBrains Mono;
  gap:5px;
  margin-top: 20px;
  font-size: 17px;
  color: ${({theme}) => theme.btnColor};
  text-decoration:bold;
  background-color: transparent;
  padding: 4px 8px;
  cursor: pointer;
  border:1px solid green;
  :hover{
    border:1px solid #6df890;
  }
`;

const Label = styled.label`
  border-radius: 15px;
  font-size: large;
  padding: 5px 59px;
  color: ${({theme}) => theme.text};
  font-weight: 600;
  border: 1px solid ${({theme}) => theme.text};
`;

const Hr = styled.hr`
  padding-top: 50px;
  margin: 29px;
`;

const A = styled.a`
  padding: 21px;
  border-radius: 15px;

  text-decoration: none;
  color: ${({theme}) => theme.text};
  font-weight: 500;
  font-size: 1.1rem;
  background-color: transparent;
  border: 1px solid white;
  border: 1px solid ${({theme}) => theme.text};
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

const ALink = styled.a`
  /* padding: 12px; */
  border-radius: 15px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 1.1rem;
  background-color: transparent;
  color: green;
  /* border: 1px solid white; */
  :hover {
    cursor: pointer;
    color: gray;
    text-decoration: underline;
  }
`;

const Qrs = styled.img`
  display: block;
  margin-left: center;
  padding: 10px;
  max-width: 480px;
  text-decoration: none;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 50px;
`

export const Home = () => {
  const [link, setLink] = useState({});
  const [link2, setLink2] = useState("");
  const [pin, setPin] = useState(0);
  const [pin2, setPin2] = useState("");
  const [qrcodes, setQrcode] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    var res;
    try {
       res = await axiosInstance.post("/postlink/", {
        Url: link,
      });
      QRcode.toDataURL(link, (err, link) => {
        if (err) return console.log(err);
        console.log(link);
        setQrcode(link);
      });
      setPin(res.data);
    } catch (err) {
        alert("Please paste the link")
      }
    };
    
  const handleReceive = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.get(`/getlink/${pin2}`);
      setLink2(res.data);
    } catch (err) {
      alert("Please enter valid token id")
    }
  };

  return (
    <Container>
      <br /><br/>
      <H1>Sharing App</H1>
      <Input
        placeholder="Paste Link"
        type="url"
        onChange={(e) => setLink(e.target.value)}
      />
      <Button onClick={handleSend}>Generate</Button>
      <br />
      <label>Use following code to access the link</label>
      {qrcodes && (
        <>
          <Qrs src={qrcodes} /> Scan Or{" "}
          <ALink href={qrcodes} download="qrcode.png">
            {" "}
            Download
          </ALink>
        </>
      )}
      <Label>{pin}</Label>
      <Input
        placeholder="Enter code"
        type="number"
        onChange={(e) => setPin2(e.target.value)}
      />
      <Button onClick={handleReceive}>Get Link</Button>
      <br />
      <p>
        Your Link :{" "}
        {link2.Url ? (
          <A target="_blank" href={link2.Url}>
            {" "}
            {link2.Url}{" "}
          </A>
        ) : (
          <p></p>
        )}
      </p>
      <br />
      <p>Created with ♥ by Shubham Athawane</p>
    </Container>
  );
};
