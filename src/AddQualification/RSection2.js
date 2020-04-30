import React from "react";
import { NavLink } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

class RSection2 extends React.Component {
  state = {
    numChildren: 0,
    userid: "",
    role: "",
    candid: "",
    phoneno: "",
    category: "",
    Sub_category: "",
    file: "",
    video: "",
    school: "",
    subject: "",
    qualification: "",
    result: "",
    gradyear: ""
  };

  enableButton = () => {};

  render() {
    const children = [];

    for (var i = 0; i < this.state.numChildren; i+=1) {
      children.push(<Childform key={i} number={i} />);
    }

    return (
      <ParentForm addChild={this.onAddChild} data={this.state}>
        {children}
      </ParentForm>
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1 
    });
  };
}

const ParentForm = props => {
  return (
    <div>
      <section>
        <div className="container">
          
          
          <form method="POST">
           
               
                  
                    
                  <div className="col-lg-6 mt-5">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      style={{ width: "100%", height: "40px" }}
                      // disabled={!isEnabled}
                      onClick={props.addChild}
                    >
                      Add Another Qualification
                    </button>
                  </div>
                  <div className="col-lg-12 mt-3">{props.children}</div>
                  
                
                
                 
                 
                  
                
                
              
              
           
          </form>
        </div>
      </section>
    </div>
  );
};
const Childform = props => {
  return (
    <div>
      <h4 style={{ fontWeight: "600" }}>Qualification</h4>

      <div className="col-lg-6">
        <div className="lf">
          <input type="text" placeholder="school" required />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="lf">
          <input type="text" placeholder="Subject" required />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="lf">
          <input type="text" placeholder="Qualification Level" required />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="lf">
          <input type="text" placeholder="Result" required />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="lf">
          <input type="number1" placeholder="Completed Year" required />
        </div>
      </div>
     
    </div>
  );
};

export default RSection2;
