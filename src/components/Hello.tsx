import * as React from 'react'

export interface HelloProps {
    compiler: string,
    framework: string
}

export default class Hello extends React.Component<HelloProps> {
    render() {
        let {compiler, framework} = this.props

        return (
            <div>
                <h1>Typescript React Template</h1>
                <p>
                    <div>
                        <label>Compiler : </label> : {compiler}
                    </div>
                    <div>
                        <label>Framework : </label> : {framework}
                    </div>
                </p>
            </div>
        )
    }
}
