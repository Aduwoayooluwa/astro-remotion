import { AbsoluteFill, delayRender, continueRender, useCurrentFrame } from "remotion"
import { Background } from "./Background"
import { useCallback, useEffect, useState } from "react"


export const Stories: React.FC<{
    messageIds: number[]
}> = ({ messageIds }) => {
    const [handle] = useState(() => delayRender())
    const frame = useCurrentFrame();
    console.log(frame)

    // state to store these messages
    const [messages, setMessages] = useState<any>([
  {
    id: 1,
    userId: 101,
    text: "Hello, how are you?",
    timestamp: "2023-12-13T09:00:00.000Z"
  },
  {
    id: 2,
    userId: 102,
    text: "I'm doing well, thanks!",
    timestamp: "2023-12-13T09:05:00.000Z"
  },
  {
    id: 3,
    userId: 101,
    text: "Glad to hear that. Are you coming to the meeting tomorrow?",
    timestamp: "2023-12-13T09:10:00.000Z"
  },
  
]
)

    console.log(messages)
    if (!messages) {
        return null;
    }

    return (
        <AbsoluteFill>
            <Background />
            <AbsoluteFill>
                {
                messages.map((mess: any) => {
                    return (
                        <div key={mess.id} style={{
                           
                        }}>
                            {mess.text}
                        </div>
                    )
                })
            }
            </AbsoluteFill>
        </AbsoluteFill>
    )
    }
