
import React, { Component } from 'react'
import axios from 'axios';

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
        "isButton":false
    };

    onChange = (event) => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
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
        console.log(this.state.isButton)

        axios.post('http://localhost:8093/api/save', body)
        .then((response)=>{
            this.setState({isButton:false})
         console.log(this.state.isButton)
        }).catch(err=>{
            this.setState({isButton:false})
            console.log(this.state.Button)
        })


    }



    render() {
        return (
            <form className='form-group'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">SORU</label>
                    <input name='soru' onChange={this.onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

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
              <button disabled={this.state.isButton} onClick={this.onSubmit} type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
        )
    }
} export default FromQuestions;



