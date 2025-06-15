import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Beer, Calendar, MapPin, Search, Users, Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CraftBeerPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b-4 border-orange-300 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Craft Beer Fes Logo" width={120} height={80} className="h-12 w-auto" />
              <div>
                <p className="text-sm text-gray-600">Craft Beer Portal Japan</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#events" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                イベント
              </Link>
              <Link href="#shops" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                ショップ
              </Link>
              <Link href="#reviews" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                レビュー
              </Link>
              <Link href="#guide" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                ガイド
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-yellow-400/20 to-green-400/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent leading-tight">
              乾杯から始まる
              <br />
              冒険を。
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              あなたの特別なクラフトビール体験がここから始まります 🍻
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all"
              >
                <Beer className="mr-2 h-5 w-5" />
                今すぐ探す
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-full text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                イベント情報
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20">🍺</div>
        <div className="absolute top-20 right-20 text-4xl opacity-20">🌾</div>
        <div className="absolute bottom-10 left-20 text-5xl opacity-20">🎉</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-20">🍻</div>
      </section>

      {/* Search Widget */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                あなたにぴったりのクラフトビールを見つけよう
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">エリア</label>
                  <Select>
                    <SelectTrigger className="rounded-full border-2 border-orange-200">
                      <SelectValue placeholder="地域を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tokyo">東京</SelectItem>
                      <SelectItem value="osaka">大阪</SelectItem>
                      <SelectItem value="kyoto">京都</SelectItem>
                      <SelectItem value="yokohama">横浜</SelectItem>
                      <SelectItem value="nagoya">名古屋</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">日付</label>
                  <Input type="date" className="rounded-full border-2 border-orange-200" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">ビールタイプ</label>
                  <Select>
                    <SelectTrigger className="rounded-full border-2 border-orange-200">
                      <SelectValue placeholder="タイプ選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ipa">IPA</SelectItem>
                      <SelectItem value="lager">ラガー</SelectItem>
                      <SelectItem value="stout">スタウト</SelectItem>
                      <SelectItem value="wheat">ヴァイツェン</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full font-bold">
                    <Search className="mr-2 h-4 w-4" />
                    検索
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Event Calendar Section */}
      <section id="events" className="py-16 px-4 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">🎪 今月のイベント・フェスティバル</h3>
            <p className="text-lg text-gray-600">全国各地で開催される楽しいイベント情報</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "東京クラフトビールフェス2024",
                date: "12月20日-22日",
                location: "お台場",
                attendees: "2,500人",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "大阪ビール祭り",
                date: "12月28日-30日",
                location: "大阪城公園",
                attendees: "1,800人",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "京都地ビールマルシェ",
                date: "1月5日-7日",
                location: "京都駅前",
                attendees: "1,200人",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 border-0 bg-white/90"
              >
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">人気</Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">{event.title}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-green-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                      参加予定: {event.attendees}
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full">
                    詳細を見る
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Slider Menu */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">🚀 サービスメニュー</h3>
            <p className="text-lg text-gray-600">あなたのクラフトビールライフをサポート</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "フェスティバル",
                description: "全国のビールイベント情報",
                icon: "🎪",
                color: "from-red-400 to-pink-400",
              },
              {
                title: "ショップ検索",
                description: "近くのクラフトビール店",
                icon: "🏪",
                color: "from-blue-400 to-cyan-400",
              },
              {
                title: "オンラインショップ",
                description: "厳選ビールをお取り寄せ",
                icon: "📦",
                color: "from-green-400 to-emerald-400",
              },
              {
                title: "レビュー",
                description: "みんなの評価とコメント",
                icon: "⭐",
                color: "from-yellow-400 to-orange-400",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 border-0 bg-gradient-to-br ${item.color} text-white cursor-pointer`}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-white/90">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Carousel */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">📚 おすすめコンテンツ</h3>
            <p className="text-lg text-gray-600">初心者からエキスパートまで楽しめる情報</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "🔰 初心者ガイド",
                subtitle: "クラフトビールの基礎知識",
                description: "ビールの種類から飲み方まで、わかりやすく解説します。",
                image: "/placeholder.svg?height=250&width=400",
                badge: "人気",
              },
              {
                title: "🎤 醸造家インタビュー",
                subtitle: "職人の想いを聞く",
                description: "全国の醸造家の方々に、ビール作りへの情熱を伺いました。",
                image: "/placeholder.svg?height=250&width=400",
                badge: "新着",
              },
              {
                title: "🏆 おすすめTOP10",
                subtitle: "今月の注目ビール",
                description: "専門家が選ぶ、今飲むべきクラフトビールをご紹介。",
                image: "/placeholder.svg?height=250&width=400",
                badge: "編集部選",
              },
            ].map((content, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 border-0 bg-white/90"
              >
                <div className="relative">
                  <Image
                    src={content.image || "/placeholder.svg"}
                    alt={content.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    {content.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-2 text-gray-800">{content.title}</h4>
                  <h5 className="font-medium text-orange-600 mb-3">{content.subtitle}</h5>
                  <p className="text-gray-600 mb-4">{content.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-purple-400 text-purple-600 hover:bg-purple-50 rounded-full"
                  >
                    続きを読む
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-400 to-yellow-400">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-4xl font-bold mb-4 text-white">🎉 最新情報をお届け！</h3>
            <p className="text-xl text-white/90 mb-8">新しいイベントやおすすめビール情報をいち早くゲット</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="メールアドレスを入力"
                className="flex-1 rounded-full border-0 bg-white/90 text-gray-800"
              />
              <Button className="bg-white text-orange-500 hover:bg-gray-100 font-bold rounded-full px-8">
                <Mail className="mr-2 h-4 w-4" />
                登録
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-2 rounded-full">
                  <Beer className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold">クラフトビール ポータル</h4>
              </div>
              <p className="text-gray-400">日本全国のクラフトビール情報をお届けする総合ポータルサイト</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">サービス</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    イベント情報
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ショップ検索
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    オンラインショップ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    レビュー
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">サポート</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">フォローする</h5>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-4 space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@craftbeer-portal.jp
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  03-1234-5678
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 クラフトビール ポータル. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
