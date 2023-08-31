
import React, { Component } from 'react'
import{signUp} from "./Api.js"

class FromQuestions extends Component {
  

    state = {
        "soru": null,
        "cevap1": null,
        "cevap2": null,
        "cevap3": null,
        "cevap4": null,
        "cevap5": null,
        "subject": null,
        "correct": null,
        "isButton":false,
        "errorObject":{}
    };

    onChange = (event) => {

        const { name, value } = event.target;
        const errorObject = {... this.state.errorObject};
        errorObject["path"] = undefined;


        this.setState({
            [name]: value,
            errorObject

        });

    };

    onSubmit = (event) => {

        event.preventDefault();

        const body = {
            "title": this.state.soru,
            "answerOne": this.state.cevap1,
            "answerTwo": this.state.cevap2,
            "answerThree": this.state.cevap3,
            "answerFour": this.state.cevap4,
            "answerFive": this.state.cevap5,
            "subject": this.state.subject,
            "correct": this.state.correct
        }

        this.setState({isButton:true})
     

        signUp(body)
        .then((response)=>{
            this.setState({isButton:false})
            this.setState({errorObject:response.data})
            console.log(this.state.errorObject)

        
        }).catch(err=>{
            this.setState({isButton:false})
            this.setState({errorObject:err.response.data})
            console.log(this.state.errorObject)
            
        })


    }



    render() {


        return (
            <form className='form-group'>
                  <div className="col-md-4">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" onChange={this.onChange} className={this.state.errorObject.path ? "form-control is-valid" : "form-control"}id="validationServer01" required/>
    <div className="valid-feedback">
      {this.state.errorObject.path}
    </div>
  </div>







                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">SORU</label>
                    <input name='soru' onChange={this.onChange} type="email" className={this.state.errorObject.path ? "form-control is-valid" : "form-control"} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div className="valid-feedback">
     {this.state.errorObject.path}
    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">CEVAP 1</label>
                    <input name='cevap1' onChange={this.onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">CEVAP 2</label>
                    <input name='cevap2' onChange={this.onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">CEVAP 3</label>
                    <input name='cevap3' onChange={this.onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">CEVAP 4</label>
                    <input name='cevap4' onChange={this.onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">CEVAP 5</label>
                    <input name='cevap5' onChange={this.onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">SUBJECT</label>
                    <input name='subject' onChange={this.onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">CORRECT</label>
                    <input name='correct' onChange={this.onChange} className="form-control" id="exampleInputPassword1" />
                </div>

              <div className='text-center container'>
              <button disabled={this.state.isButton} onClick={this.onSubmit} type="submit" className="btn btn-primary">
                {this.state.isButton && <span className='spinner-border spinner-border-sm'></span>} Sign Up
              </button>
              </div>
            </form>
        )
    }
} export default FromQuestions;



