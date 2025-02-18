import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";
import { Menu, X } from "lucide-react";

export default function LoginAndMenu() {
  // メニューの開閉状態を管理するためのステート
  const [menuOpen, setMenuOpen] = useState(false);
  
  // ログインフォームの状態を管理するためのステート
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // メニューの開閉を切り替える関数
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  // ログインボタンが押されたときの処理
  const handleLogin = () => {
    console.log("ログイン実行", { email, password });
    alert("ログインしました！（デモ）");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f4f6", padding: "16px" }}>
      {/* ハンバーガーメニュー */}
      <div style={{ position: "absolute", top: "16px", left: "16px" }}>
        <Button onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      {/* メニュー表示部分 */}
      {menuOpen && (
        <div style={{ position: "absolute", top: "48px", left: "16px", backgroundColor: "white", padding: "16px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", width: "160px" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ padding: "8px 0", borderBottom: "1px solid #ccc" }}>ホーム</li>
            <li style={{ padding: "8px 0", borderBottom: "1px solid #ccc" }}>プロフィール</li>
            <li style={{ padding: "8px 0" }}>設定</li>
          </ul>
        </div>
      )}
      
      {/* ログインフォーム */}
      <Card style={{ width: "100%", maxWidth: "400px", padding: "24px", backgroundColor: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
        <CardContent>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", textAlign: "center" }}>ログイン</h2>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#374151" }}>メールアドレス</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="メールアドレスを入力"
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#374151" }}>パスワード</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワードを入力"
            />
          </div>
          <Button onClick={handleLogin} style={{ width: "100%" }}>ログイン</Button>
        </CardContent>
      </Card>
    </div>
  );
}
