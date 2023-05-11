import React from "react";
import '../components/Footer.css'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (

        <section>
            
        <Box>
            
            <Container>
            <div class='News-footer'>
 <div class='news'>
   <span id='news-head'><b>News</b></span>
   </div>
<p class='N-text'>
<marquee direction='left'>
 <a>• Manchester United conceded two own goals and lost Lisandro Martinez</a>
 <span>•US defence secretary launches intelligence review
</span>
 <span>• Sadio Mane: Bayern Munich suspend forward after claims he punched Leroy Sane
</span>
 <span>• Constantine Hatzidakis: No further action against assistant referee for Andy Robertson incident
</span>
  </marquee>
</p>
</div> 
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Writing</FooterLink>
                        <FooterLink href="#">Internships</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        <FooterLink href="#">Teaching</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Bathande</FooterLink>
                        <FooterLink href="#">Mbuyiselo</FooterLink>
                        <FooterLink href="#">Sonke</FooterLink>
                        <FooterLink href="#">Tshepho</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>

        </Box>
        </section>
    )
}
export default Footer;
