import MpButtonContainer from "@/containers/MpButtonContainer/MpButtonContainer"
import NotificationMpContainer from "@/containers/NotificationMpContainer/NotificationMpContainer"

const productos = [
  {
    slug: "producto-1",
    name: "producto-1",
    price: 225.99,
    quantity: 2,
  },
  {
    slug: "producto-2",
    name: "producto-2",
    price: 640.99,
    quantity: 5,
  }
]

export default function HomePage() {
  return (
    <div>
      <MpButtonContainer cartItems={productos} />
      <NotificationMpContainer />
    </div>
  )
}
