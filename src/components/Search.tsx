// tslint:disable:no-console
// import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
import * as React from "react";

export default class Search extends React.Component<{}> {
    public handleSubmit(e: any) {
        console.log("PRESSED");
        e.preventDefault();
    }

    // public render() {
    //     return (
    //         <div className="question">
    //             <form onSubmit={this.handleSubmit}>
    //                 <label>
    //                     Do I need an umbrella in
    //                     <input
    //                         type = "text"
    //                         className="lineInput"
    //                         placeholder="Auckland"
    //                     />
    //                 </label>
    //                 <div className="questionButton">
    //                     <p><button>Well, do I?</button></p>
    //                 </div>
    //             </form>
    //         </div>
    //     );
    // }

    public render() {
        return (
            <div className="question">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Do I need an umbrella in
                        <input
                            className="lineInput"
                            placeholder="Auckland"
                        />
                    </label>
                    <div className="questionButton">
                        <p><button>Well, do I?</button></p>
                    </div>
                </form>
            </div>
        );
    }
}
