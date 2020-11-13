import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { useStaticQuery } from 'gatsby'


const Testimonials = () => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["Renee", "Austin"]}}) {
            edges {
                node {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
            }
            }
        }
    `)

    return (
        <TestimonialsContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What People are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`
                            color: #3fffa8; font-size: 2rem; margin-bottom: 1rem`}/>
                        <h3>Renee Vincelli</h3>
                        <p>
                            {" "}
                            "I love reading about Nicholas and his adventures
                            he always paints a picutre in my mind and is always 
                            getting into crazy adventures"
                        </p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb css={`
                            color: #f9b19b; font-size: 2rem; margin-bottom: 1rem`}/>
                        <h3>Austin Evans</h3>
                        <p>"Nicholas is always somewhere new and keeping up 
                            with his adventures is my favorite. 
                            His goofy charm keeps me waiting for his next blog"
                        </p>
                    </Testimonial>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`
                            color: #3fffa8; font-size: 2rem; margin-bottom: 1rem`}/>
                        <h3>Luna Rae</h3>
                        <p>"Goo goo gaga ooooo blu bla goo goo ga"
                        </p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid} />
                ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2 );
    height: 100%;
`
const TopLine = styled.p`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.075rem;
`
const Description = styled.div`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
        h3 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
            font-style: italic;
            color: black
        }

        p {
            color: #3b3b3b3
        }
`
const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const Images = styled(Img)`
    border-radius: 10px;
    height: 100%;

`
