import React, { Component } from 'react'


import InitiationPhase from '../Images/InitiationPhase.png'
import PeerCommunication from '../Images/PeerCommunication.png'

import MediaProtocolStack from '../Images/MediaProtocolStack.png'
import SignallingProtocolStack from '../Images/SignallingProtocolStack.png'

export class presentation extends Component {
    render() {
        return (




            <div className="card">
                <div className="card-header">
                    Home WebRTC
                        </div>

                <div className="card-body">

                    <hr></hr>
                    <h4 style={{ "text-align": "center" }}>
                        Introduction
                                 <hr></hr>
                    </h4>


                    <p className="card-text text-justify ml-3 mr-3">
                        With the creation of rich web pages, the development of animations and the apparition of new functionality like drag
                         and drop system to share files on websites, the development of <strong>real-time data</strong> sharing and bidirectional <strong>
                         video flux </strong> lead
                         to the creation of a fast and almost real-time protocol.
                          Direct exchanges between navigators already existed thanks to the creation of different plugins like Adobe Flash or Microsoft Active X.
                         Yet, these proprietary solutions weren’t <strong>standardized</strong> and thus, because of the diversity, not really useful.
                         To overcome this lack of coherence <strong>WebRTC</strong> has been created by Justin Uberti and Peter Thatcher.
                              Source code of Web RTC can be found in the following link : {"\n"}
                        <a href={"https://webrtc.googlesource.com/src"}>https://webrtc.googlesource.com/src </a>
                    </p>
                    <br />


                    <hr></hr>
                    <h4 style={{ "text-align": "center" }}>
                        Technically detailed figures
                        </h4>
                    <hr></hr>

                    <p> WebRTC involves two different entities : client and server. The server is here to initialize the connection between the two peers before they communicate with each other directly by sharing data, audio and even video stream.  Thus, two steps can be distinguished : the initiation phase and the peer communication phase. As the two phases are completely different, the protocol stack are not the same. Each phase and protocol stack will be described precisely in this part. </p>


                    <div class="row mb-3">
                        <div class="col-md card mr-2">
                            <img className="img-fluid mx-auto d-block mt-4" src={InitiationPhase} alt="FrontLaunch" style={{ "width": "100%" }}></img>
                        </div>
                        <div class="col-md card">
                            <img className="img-fluid mx-auto d-block mt-4" src={SignallingProtocolStack} alt="FrontLaunch" style={{ "width": "50%" }}></img>
                        </div>
                    </div>

                    <p>The first phase is called the initiation phase and it involves the two peers who want to communicate with each other and a Web Server. The web browser of both peers connects to the same server to download in their local context an application based on the WebRTC API. The server then supervises the exchanges for the connection of peer 1 and 2. Web sockets are used to keep the connexion open between peers. Then, through SDP (Session Description Protocole), the configuration of one peer is sent to the other to allow the second peer to send data with the right configuration.</p>


                    <div class="row mb-3">
                        <div class="col-md card mr-2">
                            <img className="img-fluid mx-auto d-block mt-3" src={PeerCommunication} alt="FrontLaunch" style={{ "width": "100%" }}></img>
                        </div>
                        <div class="col-md card">
                            <img className="img-fluid mx-auto d-block mt-3" src={MediaProtocolStack} alt="FrontLaunch" style={{ "width": "100%" }}></img>
                        </div>
                    </div>

                    <p>Once the server requests are done and the connection is accepted, client 1 and client 2 establish a bidirectional communication where data will transit. WebRTC is basically an API that has three main services and is based on a Javascript API.  </p>
                    <ul>The three services are the following ones :
                            <li style={{ "text-indent": "50px" }} className="mb-2"> <em> MediaStream </em> : MediaStream contains MediaStreamTrack objects which can either be audio and video tracks. For instance, it is use for retrieving the live flow of a camera or even a stored media. 

                        </li>
                        <li style={{ "text-indent": "50px" }} className="mb-2"> <em> RTCPeerConnection : </em> This interface is used to create a peer-to-peer connection directly between browser. For instance, it can be used to create a video conference with extremely low latency. </li>
                        <li style={{ "text-indent": "50px" }} className="mb-2"> <em> RTCDataChannel : </em> This interface enable to create a channel between two peers/browsers but this time the data format can be chosen by the user. </li>
                    </ul>

                    <p>Yet, in most use cases the two peers are not in the same network and are separated by NAT’s and even Firewalls. That is why WebRTC also has a set of tools that perpetuates the peer communication. Indeed, the three entities are now supported by two other servers that enable the peer to peer connexion. </p> 
                    <ul>Specification of the two other servers :
                        <li style={{ "text-indent": "50px" }} className="mb-2"> <em> STUN (Session Traversal Utilities for NAT) </em> : STUN servers are used to associate public addresses of peers and port associated for the communication. Thus, clients can talk directly to each other. It also allows us to bypass router restrictions.
                        </li>
                        <li style={{ "text-indent": "50px" }} className="mb-2"> <em> TURN (Traversal Using Relays around NAT) </em> : TURN servers are needed during the data transfer to allow recovering connection between peers in case of loss of the initial connection.
                        </li>
                    </ul>


                    <hr></hr>


                    <div class="row mb-5">

                        



                        <div class="col-md">
                            <h5 style={{ "text-align": "center" }}>
                                Advantages and drawbacks
                                   <hr></hr>
                            </h5>
                            <p className="card-text text-justify ml-3 mr-3">
                                <ul>
                                    <li style={{ "text-indent": "5px" }}>

                                        Advantages:
                                        
                                        <ul>
                                            <li>
                                            Standardized protocol Using both peers to peer and server model
                                            </li>
                                        </ul>

                                    </li>

                                    

                                    <li style={{ "text-indent": "5px" }}>
                                        Disadvantages:{"\n"}
                                        <ul>
                                            <li>
                                            Security (js app, personal data) 
                                            </li>
                                            <li>
                                            Ip exposed
                                            </li>
                                            <li>
                                            Uses UDP protocol, no packet loss check
                                            </li>
                                            <li>
                                            Usage in companies can be difficult (udp and peer to peer, firewall and nat)
                                            </li>
                                            <li>
                                            No adaptive bitrate
                                            </li>
                                        </ul>
                                        {"\n"}
                                        {"\n"}
                                        {"\n"}
                                        {"\n"}
                                        {"\n"}
                                    </li>
                                </ul>
                            </p>
                        </div>



                        <div class="col-md">
                            <h5 style={{ "text-align": "center" }}>
                                Details on use cases and fields of application
                                   <hr></hr>
                            </h5>

                            <p className="card-text text-justify ml-3 mr-3">
                                In just eight years of existence, WebRTC is now massively used for multiple
                                applications. Indeed, this API that enabled people to communicate in real-time
                                directly through web applications and namely in peer to peer mode is now used in
                                Google Meet, Facebook Messenger and even Discord.
                               </p>

                        </div>


                    </div>

                    <hr></hr>
                    <h4 style={{ "text-align": "center" }}>
                        Existing projects and links
                                <hr></hr>
                    </h4>
                    <div className="card">

                        <div className="card-body">
                            <p className="card-text text-justify ml-3 mr-3">
                                In this section, are listed links to existing WebRTC projects and applications.
                             </p>
                            <ul>
                                <li style={{ "text-indent": "50px" }}> The link to the official WebRTC page for explainations:  <br />  <a href="https://webrtc.org/start/"> https://webrtc.org/start/ </a></li>
                                <li style={{ "text-indent": "50px" }}> This first page allow us to understant the WebRTC project in his globality: <br /><a href="https://en.wikipedia.org/wiki/WebRTC"> https://en.wikipedia.org/wiki/WebRTC </a>  </li>
                                <li style={{ "text-indent": "50px" }}> This site was usefull to create our web application: <br />  <a href="https://codeutopia.net/blog/2016/02/08/using-webrtc-and-react-to-build-a-basic-chat-server/"> https://codeutopia.net/blog/2016/02/08/using-webrtc-and-react-to-build-a-basic-chat-server/ </a></li>
                                <li style={{ "text-indent": "50px" }}> Usefull tips to implement WebRTC:  <br />  <a href="https://www.html5rocks.com/en/tutorials/webrtc/basics/"> https://www.html5rocks.com/en/tutorials/webrtc/basics/ </a></li>
                            </ul>
                        </div>
                    </div>



                </div>
            </div>












        )
    }
}

export default presentation
