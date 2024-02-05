type Photo = {
    imgUrl?: string
}
type Heart = {
    isCheck: boolean
}
type PhotoWithHeart = Photo & Heart

type Info = {
    title: string,
    derail: string,
    price: number,
    discountPrice?: number,
}
type Banner = {
    isMileage: boolean,
    isFreeDelivery: boolean,
}
type Review = {
    starRate: number,
    count: number,
}
type ZigZagCard = PhotoWithHeart & Info & Banner & Review