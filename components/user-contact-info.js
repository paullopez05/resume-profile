import styles from "../styles/UserContactInfo.module.css";

const UserContactInfo = (ctx) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.fullname}> &lt; {ctx.props.name} /&gt; </div>
        <div className={styles["contact-details"]}> {ctx.props.name} </div>
        <div className={styles["contact-details"]}> {ctx.props.email} </div>
        <div className={styles["contact-details"]}> {ctx.props.phone} </div>
      </div>
    </div>
  );
};

export default UserContactInfo;
