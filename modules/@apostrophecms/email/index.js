module.exports = {
    options: {
      nodemailer: {
        service: 'gmail',
        host: "smtp.gmail.com.com",
        auth: {
          // substitute in your actual Gmail credentials
          user: "username@gmail.com",
          pass: "password"
        }
      }
    }
  };