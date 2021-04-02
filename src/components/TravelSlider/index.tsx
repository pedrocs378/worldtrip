import { Box } from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { useContinents } from '../../hooks/continents'

import { SlideContent } from './SlideContent'

SwiperCore.use([Navigation, Pagination, Scrollbar])

export function TravelSlider() {
	const continents = useContinents()

	return (
		<Box mx="auto" mb="40px" mt="52px" w="100%" h="450px">
			<Swiper
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true, hide: true }}
			>
				{continents.map(continent => {
					return (
						<SwiperSlide key={continent.id}>
							<SlideContent
								destinationUrl={continent.slug}
								title={continent.name}
								description={continent.description}
								imageUrl={continent.landscape_cover_url}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</Box>
	)
}