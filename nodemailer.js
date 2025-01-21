const generator = require('generate-password');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 587,
    secure: false,
    auth: {
      user: 'woogyeol_corp@naver.com',
      pass: 'teambred0812!!',
    },
  });

async function main() {
  const password = generator.generate({ length: 10, numbers: true });

  const info = await transporter.sendMail({
    from: 'woogyeol_corp@naver.com',
    to: 'songh6508@gmail.com',
    subject: '우결에서 임시 비밀번호를 발급드립니다.',
    html: 
    "<h1 >우결에서 임시 비밀번호를 알려드립니다.</h1> <h2> 비밀번호 : " + password + "</h2>"
    +'<h3 style="color: crimson;">임시 비밀번호로 로그인 하신 후, 반드시 비밀번호를 수정해 주세요.</h3>'
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);