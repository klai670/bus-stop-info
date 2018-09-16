import * as React from "react";

export default class FirstComponent extends React.Component<{}> {

        public render() {
                return (
                        <div className="centreText">
                                <img src={require('./central-dept-point-pocket-guide_july-2018-web-2.png')} width="1000px"/>
                                <p>Source: <a href="https://at.govt.nz/media/1977606/central-dept-point-pocket-guide_july-2018-web.pdf">Auckland Transport</a></p>
                        </div>
                );
        }
}