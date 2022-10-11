import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QRcode from "qrcode";

export const SendCode = () => {
  const Container = styled.div`
    flex-direction: column;
    margin-top: 68px;
    width: 100%;
    height: 720px;
    background-color: ${({ theme }) => theme.bg};
    @media (max-width: 768px) {
      overflow: hidden;
      flex-direction: column;
      transition: max-height 0.3s ease-in;
      width: 100%;
    }
  `;

  const LeftBox = styled.div`
    float: left;
    margin-left: 30px;
    width: 25%;
    height: 280px;
  `;

  const RightBox = styled.div`
    float: right;
    padding: 30px;
    overflow:hidden;

    margin-right: 40px;
    color: ${({ theme }) => theme.text};
    border: 1px solid green;
    width: 25%;
    box-shadow: 5px 10px;
    height: 300px;
    background-color: ${({ theme }) => theme.bg};
    @media screen and (max-width: 768px) {
      width: auto;
      margin-top: auto;
      flex-direction: column;

    }
  `;

  const Wrapper = styled.div`
    @media screen and (max-width: 400px) {
   #one { 
    float: none;
    margin-right:0;
    width:auto;
    border:0;
    border-bottom:2px solid #000;    
  }
}
  `;

  const TextArea = styled.textarea`
    box-shadow: 5px 10px;
    width: 50rem;
    height: 360px;
    border-radius: 6px;
    font-family: jetBrains Mono;
    font-size: 16px;
    padding: 10px 9px;
    border: 2px solid #55f56a84;
    color: ${({ theme }) => theme.text};
    text-align: left;
    background-color: ${({ theme }) => theme.bg};
    @media screen and (max-width: 768px) {
      width: auto;
    }
  `;

  const H1 = styled.h2`
    font-family: JetBrains Mono;
    color: ${({ theme }) => theme.textSoft};
    font-weight: 400;
  `;

  const QR = styled.img`
    float: right;
    height: 300px;
    width: 300px;
    margin-right: 20px;
    margin-top: -19px;
    border-radius: 15px;
    @media screen and (max-width: 768px) {
      width: auto;
    }
  `;

  const Button = styled.button`
    border-radius: 5px;
    border: none;
    font-family: jetBrains Mono;
    font-size: 17px;
    color: ${({ theme }) => theme.btnColor};
    background-color: transparent;
    margin-top: 10px;
    padding: 4px 8px;
    cursor: pointer;
    border: 1px solid green;
    :hover {
      border: 1px solid #6df890;
    }
  `;

  const ALink = styled.a`
    border-radius: 5px;
    border: none;
    font-family: jetBrains Mono;
    font-size: 17px;
    color: ${({ theme }) => theme.btnColor};
    background-color: transparent;
    margin-top: 10px;
    padding: 4px 8px;
    cursor: pointer;
    border: 1px solid green;
    :hover {
      border: 1px solid #6df890;
    }
  `;
  // const handlePaste = async (e) => {
  //   e.preventDefault();
  //   const BIN = document.querySelector("#paste-bin");
  //   const Read = await navigator.clipboard.readText();
  //   BIN.value = Read;
  // };
  const [textA, setText] = useState(null);
  const [qrcodes, setQrcode] = useState("");

  const handleGen = async (e) => {
    e.preventDefault();
    try {
      QRcode.toDataURL(textA, (err, textA) => {
        if (err) return console.log(err);
        setQrcode(textA);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <H1>Share your code..</H1> <hr />
        <br />
        <LeftBox>
          <TextArea
            placeholder="Paste your code here"
            onChange={(e) => setText(e.target.value)}
            value={textA}
          ></TextArea>
        </LeftBox>
        <br />
        <RightBox>
          {qrcodes && (
            <>
              <QR src={qrcodes} /> Scan Or{" "}
              <ALink href={qrcodes} download="code.png">
                Download
              </ALink>
            </>
          )}
          <Button onClick={handleGen}>Generate</Button>
        </RightBox>
      </Wrapper>
    </Container>
  );
};
