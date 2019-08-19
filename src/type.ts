export interface userInfo {
  nickname: string;
  sex: string;
}
export interface message extends userInfo {
  who: string;
  text: string;
}

export interface typingProps {
  // className?: string; // For styled
  userInfo: userInfo;
  onSend: (message: message) => void;
  onLeave: () => void;
}
export interface ChatboxProps extends typingProps {
  messages: message[];
}
