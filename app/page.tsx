import MpButtonContainer from "@/containers/MpButtonContainer/MpButtonContainer"
import NotificationMpContainer from "@/containers/NotificationMpContainer/NotificationMpContainer"
import ShoppingCartContainer from "@/containers/ShoppingCartContainer/ShoppingCartContainer"

export default function HomePage() {
  return (
    <div>
      <MpButtonContainer />
      <NotificationMpContainer />
      <ShoppingCartContainer />
    </div>
  )
}
