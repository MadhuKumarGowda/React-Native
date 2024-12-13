import { Image, StyleSheet, Text, ScrollView, View } from "react-native";

const backgroundImage = require("../../assets/images/bg.jpg");

import "../../global.css";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-purple-400 padding">
      <ScrollView className="flex:1">
        <Image source={backgroundImage} className="w-screen h-1/2"></Image>
        <Text className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam
          numquam earum voluptas dolorum deserunt est qui quasi velit quo. Eaque
          possimus aliquid nisi quis maiores incidunt quod? Vero ut voluptas
          voluptates dolorum voluptatibus nihil minima odit eaque esse sint
          laborum natus ipsa reiciendis labore, minus iure autem. Maxime
          consectetur maiores, ut dignissimos, nostrum aperiam at, iure aliquam
          impedit provident sint nemo ipsum. Omnis enim, doloremque qui eligendi
          repellendus dolores, officia id obcaecati ex sapiente voluptatem
          soluta ipsum vel a corporis explicabo nostrum deleniti velit neque
          ipsam? Repellendus expedita minus, iure tenetur nobis enim ex dolores
          voluptate ipsum fugit perferendis cumque atque est quas id, illum ut
          voluptatum provident hic eveniet esse ab sint nemo! Laborum, in.
          Provident iusto perferendis tempore. Sapiente repudiandae praesentium
          eaque. Obcaecati nulla quae officia, nobis atque esse optio
          perspiciatis officiis, rem natus molestiae voluptate quas harum
          temporibus cupiditate similique! Ab dolor, beatae ipsa voluptate aut
          labore repellat dolores possimus soluta omnis vel amet exercitationem
          similique, ad sequi reprehenderit cupiditate accusamus laborum odio
          iste minus nihil? Repudiandae cupiditate numquam voluptatem tempora
          quibusdam! Voluptatem aut dolorem soluta iusto! Quae maxime natus
          mollitia, eligendi incidunt nesciunt ratione accusantium voluptatibus
          exercitationem temporibus officia velit enim minima necessitatibus
          illo iure, magni consectetur placeat veritatis id delectus ea? Ea
          nulla animi quasi corrupti harum incidunt maiores libero repudiandae
          laboriosam inventore id quisquam, earum veritatis, placeat cum maxime
          quidem fugiat dicta accusantium doloremque, provident sit sequi. Qui
          iste, deleniti excepturi ullam illum eligendi mollitia nihil. Alias
          laborum, quos ducimus tempore eius nobis asperiores illum natus
          possimus ipsa similique optio delectus maxime error aut, numquam
          facere veniam dolorum! Dolores dicta, fugit amet ullam esse dolor
          vitae sit aut odit error, repudiandae blanditiis. Perferendis a fugiat
          excepturi aperiam dolorum voluptatem recusandae rem, quos odio minima
          quam natus vel eos dicta possimus molestiae voluptatibus mollitia
          omnis assumenda odit voluptatum? At aliquid ratione quos sit itaque ad
          quidem nulla repudiandae ut odio, nostrum omnis dolor asperiores
          laboriosam, sint quam, ipsum ipsam cupiditate harum voluptatem minima
          quo cum? Rem quisquam, omnis perspiciatis libero, quaerat, odit
          impedit officiis sunt eum vero suscipit necessitatibus minima. Neque
          obcaecati earum perferendis corporis. Quae deleniti enim et pariatur
          autem? Voluptatum rerum distinctio nihil ullam necessitatibus
          architecto incidunt, iure temporibus ipsa, cupiditate eum ad, corrupti
          quasi? Officiis vitae labore assumenda voluptas, itaque possimus
          recusandae! At ratione eaque illo facilis accusantium culpa molestiae,
          quas amet pariatur aperiam ad temporibus voluptate odit reprehenderit
          labore porro. Similique explicabo, inventore voluptatibus omnis libero
          officia corrupti quasi dolorem saepe laborum. Vitae nam, ipsum labore
          exercitationem ea, ab aut modi sunt quos omnis voluptatibus obcaecati
          deleniti asperiores dignissimos, placeat id? In, rerum illum? Sequi
          ad, odit harum debitis assumenda dignissimos id, explicabo quibusdam
          similique, reprehenderit libero ratione dolorum rerum nemo delectus
          totam quos officia quo pariatur error? Vero ducimus qui et mollitia
          iste accusantium, amet quidem quae sit veniam non sint repellendus
          error maxime corrupti, numquam soluta? Asperiores, fugiat minus vitae
          maxime, eius, quod id ipsa porro magni veniam officia modi quo
          similique provident assumenda veritatis. Laboriosam, maiores
          asperiores.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
