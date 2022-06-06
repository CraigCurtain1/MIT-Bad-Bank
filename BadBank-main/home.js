function Home(){
  return (
    <center><Card
      txtcolor="white"
      bgcolor="success"
      header="MIT Bad Bank"
      title="Welcome to the bank"
      text="Banking Made Simple and Insecure."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    /></center>    
  );  
}
