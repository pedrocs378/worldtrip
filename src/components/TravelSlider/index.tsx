import { Box } from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { SlideContent } from './SlideContent'

SwiperCore.use([Navigation, Pagination, Scrollbar])

export function TravelSlider() {

	return (
		<Box mx="auto" mb="40px" mt="52px" w="100%" h="450px">
			<Swiper
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true, hide: true }}
			>
				<SwiperSlide>
					<SlideContent
						title="América do norte"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						imageUrl="https://images.unsplash.com/photo-1558935475-8b5919e5d70a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContent
						title="América do sul"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						imageUrl="https://images.unsplash.com/photo-1593985437133-03d5e1435c03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContent
						title="Ásia"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						imageUrl="https://l3wca310lzh353h1q1361q1c9h-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/bigstock-Shanghai-Skyline-Panoramic-resize-1200.jpg"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContent
						title="África"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						imageUrl="https://c.wallhere.com/photos/a7/57/1920x1080_px_Africa_clouds_Desert_landscape_mountain_Namibia_nature-1104205.jpg!d"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContent
						title="Europa"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						imageUrl="/png/europe.png"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContent
						title="Oceania"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						imageUrl="https://www.carrementbelle.com/blog/wp-content/uploads/2020/07/perfume-oceania.jpg"
					/>
				</SwiperSlide>
			</Swiper>
		</Box>
	)
}