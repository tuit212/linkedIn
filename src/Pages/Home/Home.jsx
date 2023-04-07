import React from 'react'
import './Home.scss'


const Home = () => {
  return (
    <section>
        <div className="container home__container">
            <article className="home__pages-left">
                <div className="top">
                    <div className="top__img">
                        {/* <img src="https://images.pexels.com/photos/6390058/pexels-photo-6390058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                    </div>
                    <h2>Wawan Purwanto</h2>
                    <p> I have experince 1 year UI/UX Design </p>
                </div>
            </article>
            {/* center */}
            <article className="home__pages-center">
                <div className="top">
                    <h2>Wawan Purwanto</h2>
                    <p> I have experince 1 year UI/UX Design </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias asperiores deleniti, voluptatum autem aut quisquam ab ipsum nihil fugiat fugit, esse eveniet vel, accusamus nesciunt repellendus ipsam quasi quibusdam pariatur quam ratione. Culpa non eum soluta libero porro voluptatem assumenda velit ex ea obcaecati? Eos pariatur quisquam commodi eum nihil error beatae dolorem voluptatem enim porro, itaque, mollitia ea exercitationem excepturi dolore quos sint cupiditate consectetur aut inventore. Nobis consectetur dolore voluptatibus, quia consequatur voluptates rerum harum in dolores sequi enim ea eaque aliquam perspiciatis, similique soluta sit. Minus, quidem cum sit voluptatum error ducimus aspernatur fugit aliquid odio.</p>
                </div>
            </article>
            <article className="home__pages-right">
                <div className="top">
                    <div className="top__img">
                        {/* <img src="https://images.pexels.com/photos/6390058/pexels-photo-6390058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                    </div>
                    <h2>Wawan Purwanto</h2>
                    <p> I have experince 1 year UI/UX Design </p>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Home