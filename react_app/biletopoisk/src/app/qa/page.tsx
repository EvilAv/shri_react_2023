import { AccordeonCard } from "../../../components/accordeon/AccordeonCard";
import { TextCard } from "../../../components/textcard/TextCard";
import { TextCardItem } from "../../../components/textcard/TextCardItem";

export default function QAPage() {
  return <div>
      <TextCard title="Вопросы-ответы" />
      <AccordeonCard title="Что такое Билетопоиск?">
      Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.
      </AccordeonCard>
      <AccordeonCard title="Какой компании принадлежит Билетопоиск?">
        Билетопоиск принадлежит компании Weyland-Yutani Corporation
      </AccordeonCard>
      <AccordeonCard title="Как купить билет на Билетопоиск?">
        Очень просто
      </AccordeonCard>
      <AccordeonCard title="Как оставить отзыв на Билетопоиск?">
        Еще проще
      </AccordeonCard>
    </div>
}
