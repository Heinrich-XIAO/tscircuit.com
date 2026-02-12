export const usbCLedFlashlightTemplate = {
  type: "board",
  code: `
import { useRedLed } from "@tsci/seveibar.red-led"
import { PushButton } from "@tsci/seveibar.push-button"
import { useUsbC } from "@tsci/seveibar.smd-usb-c"

export default () => {
  const USBC = useUsbC("USBC")
  const Led = useRedLed("LED")
  return (
    <board width="12mm" height="30mm" schAutoLayoutEnabled autorouter="auto-cloud">
      <USBC pcbY={-10} />
      <Led pcbY={12} />
      <PushButton name="SW1" pcbY={0} />
      <resistor name="R1" footprint="0603" resistance="1k" pcbY={7} />
      <trace from=".USBC > .VBUS1" to=".SW1 > .pin3" />
      <trace from=".SW1 > .pin2" to=".R1 > .pos" />
      <trace from=".R1 > .neg" to={Led.pos} />
      <trace from=".LED > .neg" to=".USBC > .GND1" />
    </board>
  )
}`.trim(),
}
