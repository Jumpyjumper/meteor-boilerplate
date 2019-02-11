import React from 'react';
import Alert from '/imports/ui/components/alert/alert.jsx';
import Badge from '/imports/ui/components/badge/badge.jsx';
import {H1, H2, H3, H4, H5, H6} from '/imports/ui/components/headings/headings.jsx';
import {Table, Thead, Tbody, Tr, Th, Td} from '/imports/ui/components/table/index.jsx';
import Caption from '/imports/ui/components/caption/caption.jsx';

export default class Styleguide extends React.Component { 
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table dark>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table striped>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table striped dark>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table bordered>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table bordered dark>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table hover>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table hover dark>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table small>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table small dark>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table>
                            <Thead dark>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table>
                            <Thead light>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>Class</Th>
                                    <Th>Heading</Th>
                                    <Th>Heading</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr type="active">
                                    <Th>Active</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="primary">
                                    <Th>Primary</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="secondary">
                                    <Th>Secondary</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="success">
                                    <Th>Success</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="danger">
                                    <Th>Danger</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="warning">
                                    <Th>Warning</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="info">
                                    <Th>Info</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="light">
                                    <Th>Light</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="dark">
                                    <Th>Dark</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table dark>
                            <Thead>
                                <Tr>
                                    <Th>Class</Th>
                                    <Th>Heading</Th>
                                    <Th>Heading</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr type="active">
                                    <Th>Active</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="primary">
                                    <Th>Primary</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="secondary">
                                    <Th>Secondary</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="success">
                                    <Th>Success</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="danger">
                                    <Th>Danger</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="warning">
                                    <Th>Warning</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="info">
                                    <Th>Info</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="light">
                                    <Th>Light</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                                <Tr type="dark">
                                    <Th>Dark</Th>
                                    <Td>Cell</Td>
                                    <Td>Cell</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Table>
                            <Caption>List of users</Caption>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>First</Th>
                                    <Th>Last</Th>
                                    <Th>Handle</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>1</Th>
                                    <Td>Mark</Td>
                                    <Td>Otto</Td>
                                    <Td>@mdo</Td>
                                </Tr>
                                <Tr>
                                    <Th>2</Th>
                                    <Td>Jacob</Td>
                                    <Td>Thornton</Td>
                                    <Td>@fat</Td>
                                </Tr>
                                <Tr>
                                    <Th>3</Th>
                                    <Td>Larry</Td>
                                    <Td>the Bird</Td>
                                    <Td>@twitter</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <H1>h1. Bootstrap heading</H1>
                        <H2>h2. Bootstrap heading</H2>
                        <H3>h3. Bootstrap heading</H3>
                        <H4>h4. Bootstrap heading</H4>
                        <H5>h5. Bootstrap heading</H5>
                        <H6>h6. Bootstrap heading</H6>
                        <H1 display="1">Display 1</H1>
                        <H2 display="2">Display 2</H2>
                        <H3 display="3">Display 3</H3>
                        <H4 display="4">Display 4</H4>
                        <Alert type="primary">
							This is a primary alert—check it out!
                        </Alert>
                        <Alert type="secondary">
							This is a secondary alert—check it out!
                        </Alert>
                        <Alert type="success">
							This is a success alert—check it out!
                        </Alert>
                        <Alert type="danger">
							This is a danger alert—check it out!
                        </Alert>
                        <Alert type="warning">
							This is a warning alert—check it out!
                        </Alert>
                        <Alert type="info">
							This is a info alert—check it out!
                        </Alert>
                        <Alert type="light">
							This is a light alert—check it out!
                        </Alert>
                        <Alert type="dark">
							This is a dark alert—check it out!
                        </Alert>
                        <Alert type="primary">
							This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                        </Alert>
                        <Alert type="secondary">
							This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                        </Alert>
                        <Alert type="success">
							This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                        </Alert>
                        <Alert type="danger">
							This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                        </Alert>
                        <Alert type="warning">
							This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                        </Alert>
                        <Alert type="info">
							This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                        </Alert>
                        <Alert type="light">
							This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                        </Alert>
                        <Alert type="dark">
							This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                        </Alert>
                        <Alert type="success">
                            <H4 className="alert-heading">Well done!</H4>
                            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                            <hr />
                            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                        </Alert>
                        <Alert type="warning" dismiss>
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        </Alert>
                        <H1>
                            <span>Example heading </span>
                            <Badge type="secondary">New</Badge>
                        </H1>
                        <H2>
                            <span>Example heading </span>
                            <Badge type="secondary">New</Badge>
                        </H2>
                        <H3>
                            <span>Example heading </span>
                            <Badge type="secondary">New</Badge>
                        </H3>
                        <H4>
                            <span>Example heading </span>
                            <Badge type="secondary">New</Badge>
                        </H4>
                        <H5>
                            <span>Example heading </span>
                            <Badge type="secondary">New</Badge>
                        </H5>
                        <H6>
                            <span>Example heading </span>
                            <Badge type="secondary">New</Badge>
                        </H6>
                        <button type="button" className="btn btn-primary">
							Notifications <Badge type="light">4</Badge>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

