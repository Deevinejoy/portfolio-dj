import React from 'react'
import './Testimonials.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


const Testimonials = () => {
    const data = [
        {
            name: 'Kita',
            des: 'She listened to our ideas and worked great with the team.',
            position: 'CEO',
            img: 'https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Olaoluwa',
          des: 'We were blow away by her development skills.',
          position: 'CEO',
          img: 'https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
        {
            name: 'John',
            des: 'She took our website to the next level by creating a seemless and virtually appealing design.',
            position: 'Web designer',
            img: 'https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            name: 'Shola',
            des: 'Working with Divine was a game changer for our website.',
            position: 'CEO',
            img: 'https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            name: 'Elijah',
            des: 'Her ability to understand our needs made the entire development process a breeze.',
            position: 'Video editor',
            img: 'https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            name: 'Daniel',
            des: 'Satisfied with her work.',
            position: 'Software Engineer',
            img: 'https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
      
        {
            name: 'Ebunoluwa',
            des: 'Great problem solving ability and willing to learn more.',
            position: 'CEO',
            img: 'https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='container testimonial-sect'
    id='testimonials'>
          <div className='section-title'>
            <h2>Testimonials</h2>
            <span className='line'></span>
          </div>
    <div className='testimonial-slider'>
        <Slider {...settings}>
            
            {data.map((item, index) =>(
                <div className='main-content-slider' key={index}>
                    <div className='content-slider' key={index}>
                    <img src={item.img} alt={item.name} className='center-img'/>
                    <h3>{item.name}</h3>                    
                    <p>{item.position}</p>
                    <p>{item.des}</p>
                   
                    </div>

                </div>
                
            ))}

        </Slider>
    </div>
       
      
    </div>
  )
}

export default Testimonials
