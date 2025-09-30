const LoginForm = () => {
  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "300px",
      margin: "20px auto", // biar form ke tengah
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      outline: "none",
    },
    button: {
      padding: "10px",
      fontSize: "16px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <form style={styles.form}>
      <input style={styles.input} type="text" placeholder="Username" />
      <input style={styles.input} type="email" placeholder="Email" />
      <input style={styles.input} type="password" placeholder="Password" />
      <button style={styles.button} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
