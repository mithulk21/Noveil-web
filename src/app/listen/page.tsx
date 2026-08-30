import { redirect } from "next/navigation"

/**
 * `/listen` is the address printed on release artwork and shared in bios, so it
 * has to resolve. There is only one page, so send it to the streaming list.
 */
export default function ListenPage() {
  redirect("/#listen")
}
