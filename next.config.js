module.exports = {
  async redirects() {
    return [
      {
        source: '/0',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feeds/atom.xml',
        destination: '/feed.xml',
        permanent: true,
      },
      {
        source: '/tags/:tag*',
        destination: '/knihy/:tag*',
        permanent: true,
      },
      {
        source: '/authors/:author*',
        destination: '/autori/:author*',
        permanent: true,
      },
      {
        source: '/index:slug(\\d{1,}).html',
        destination: '/:slug',
        permanent: true,
      },
      {
        source: '/aldous-huxley/:book*',
        destination: '/knihy/aldous-huxley/:book*',
        permanent: true
      },
      {
        source: '/alena-mornstajnova/:book*',
        destination: '/knihy/alena-mornstajnova/:book*',
        permanent: true
      },
      {
        source: '/alexandr-solzenicyn/:book*',
        destination: '/knihy/alexandr-solzenicyn/:book*',
        permanent: true
      },
      {
        source: '/annelies-verbeke/:book*',
        destination: '/knihy/annelies-verbeke/:book*',
        permanent: true
      },
      {
        source: '/anthony-burgess/:book*',
        destination: '/knihy/anthony-burgess/:book*',
        permanent: true
      },
      {
        source: '/anton-myrer/:book*',
        destination: '/knihy/anton-myrer/:book*',
        permanent: true
      },
      {
        source: '/arnost-lustig/:book*',
        destination: '/knihy/arnost-lustig/:book*',
        permanent: true
      },
      {
        source: '/arthur-c-clarke/:book*',
        destination: '/knihy/arthur-c-clarke/:book*',
        permanent: true
      },
      {
        source: '/arthur-miller/:book*',
        destination: '/knihy/arthur-miller/:book*',
        permanent: true
      },
      {
        source: '/bohumil-hrabal/:book*',
        destination: '/knihy/bohumil-hrabal/:book*',
        permanent: true
      },
      {
        source: '/boris-vian/:book*',
        destination: '/knihy/boris-vian/:book*',
        permanent: true
      },
      {
        source: '/bram-stoker/:book*',
        destination: '/knihy/bram-stoker/:book*',
        permanent: true
      },
      {
        source: '/charles-bukowski/:book*',
        destination: '/knihy/charles-bukowski/:book*',
        permanent: true
      },
      {
        source: '/david-herbert-lawrence/:book*',
        destination: '/knihy/david-herbert-lawrence/:book*',
        permanent: true
      },
      {
        source: '/david-lodge/:book*',
        destination: '/knihy/david-lodge/:book*',
        permanent: true
      },
      {
        source: '/edward-albee/:book*',
        destination: '/knihy/edward-albee/:book*',
        permanent: true
      },
      {
        source: '/emile-zola/:book*',
        destination: '/knihy/emile-zola/:book*',
        permanent: true
      },
      {
        source: '/ernest-hemingway/:book*',
        destination: '/knihy/ernest-hemingway/:book*',
        permanent: true
      },
      {
        source: '/firstname-lastname/:book*',
        destination: '/knihy/firstname-lastname/:book*',
        permanent: true
      },
      {
        source: '/franz-kafka/:book*',
        destination: '/knihy/franz-kafka/:book*',
        permanent: true
      },
      {
        source: '/friedrich-durrenmatt/:book*',
        destination: '/knihy/friedrich-durrenmatt/:book*',
        permanent: true
      },
      {
        source: '/gabriel-chevallier/:book*',
        destination: '/knihy/gabriel-chevallier/:book*',
        permanent: true
      },
      {
        source: '/george-orwell/:book*',
        destination: '/knihy/george-orwell/:book*',
        permanent: true
      },
      {
        source: '/gustave-flaubert/:book*',
        destination: '/knihy/gustave-flaubert/:book*',
        permanent: true
      },
      {
        source: '/gustav-meyrink/:book*',
        destination: '/knihy/gustav-meyrink/:book*',
        permanent: true
      },
      {
        source: '/guy-de-maupassant/:book*',
        destination: '/knihy/guy-de-maupassant/:book*',
        permanent: true
      },
      {
        source: '/harper-lee/:book*',
        destination: '/knihy/harper-lee/:book*',
        permanent: true
      },
      {
        source: '/hermann-hesse/:book*',
        destination: '/knihy/hermann-hesse/:book*',
        permanent: true
      },
      {
        source: '/hugh-howey/:book*',
        destination: '/knihy/hugh-howey/:book*',
        permanent: true
      },
      {
        source: '/ian-mcewan/:book*',
        destination: '/knihy/ian-mcewan/:book*',
        permanent: true
      },
      {
        source: '/irvine-welsh/:book*',
        destination: '/knihy/irvine-welsh/:book*',
        permanent: true
      },
      {
        source: '/isaac-asimov/:book*',
        destination: '/knihy/isaac-asimov/:book*',
        permanent: true
      },
      {
        source: '/jack-kerouac/:book*',
        destination: '/knihy/jack-kerouac/:book*',
        permanent: true
      },
      {
        source: '/jack-london/:book*',
        destination: '/knihy/jack-london/:book*',
        permanent: true
      },
      {
        source: '/jan-balaban/:book*',
        destination: '/knihy/jan-balaban/:book*',
        permanent: true
      },
      {
        source: '/jan-weiss/:book*',
        destination: '/knihy/jan-weiss/:book*',
        permanent: true
      },
      {
        source: '/jerome-david-salinger/:book*',
        destination: '/knihy/jerome-david-salinger/:book*',
        permanent: true
      },
      {
        source: '/jerome-klapka-jerome/:book*',
        destination: '/knihy/jerome-klapka-jerome/:book*',
        permanent: true
      },
      {
        source: '/jevgenij-ivanovic-zamjatin/:book*',
        destination: '/knihy/jevgenij-ivanovic-zamjatin/:book*',
        permanent: true
      },
      {
        source: '/john-steinbeck/:book*',
        destination: '/knihy/john-steinbeck/:book*',
        permanent: true
      },
      {
        source: '/john-webster/:book*',
        destination: '/knihy/john-webster/:book*',
        permanent: true
      },
      {
        source: '/joseph-heller/:book*',
        destination: '/knihy/joseph-heller/:book*',
        permanent: true
      },
      {
        source: '/karel-capek/:book*',
        destination: '/knihy/karel-capek/:book*',
        permanent: true
      },
      {
        source: '/ken-kesey/:book*',
        destination: '/knihy/ken-kesey/:book*',
        permanent: true
      },
      {
        source: '/kingsley-amis/:book*',
        destination: '/knihy/kingsley-amis/:book*',
        permanent: true
      },
      {
        source: '/klaus-mann/:book*',
        destination: '/knihy/klaus-mann/:book*',
        permanent: true
      },
      {
        source: '/kurt-vonnegut/:book*',
        destination: '/knihy/kurt-vonnegut/:book*',
        permanent: true
      },
      {
        source: '/ladislav-fuks/:book*',
        destination: '/knihy/ladislav-fuks/:book*',
        permanent: true
      },
      {
        source: '/lev-nikolajevic-tolstoj/:book*',
        destination: '/knihy/lev-nikolajevic-tolstoj/:book*',
        permanent: true
      },
      {
        source: '/margaret-atwood/:book*',
        destination: '/knihy/margaret-atwood/:book*',
        permanent: true
      },
      {
        source: '/markus-zusak/:book*',
        destination: '/knihy/markus-zusak/:book*',
        permanent: true
      },
      {
        source: '/mary-shelley/:book*',
        destination: '/knihy/mary-shelley/:book*',
        permanent: true
      },
      {
        source: '/milan-kundera/:book*',
        destination: '/knihy/milan-kundera/:book*',
        permanent: true
      },
      {
        source: '/paulo-coelho/:book*',
        destination: '/knihy/paulo-coelho/:book*',
        permanent: true
      },
      {
        source: '/petra-soukupova/:book*',
        destination: '/knihy/petra-soukupova/:book*',
        permanent: true
      },
      {
        source: '/petr-sabach/:book*',
        destination: '/knihy/petr-sabach/:book*',
        permanent: true
      },
      {
        source: '/pierre-boulle/:book*',
        destination: '/knihy/pierre-boulle/:book*',
        permanent: true
      },
      {
        source: '/ray-bradbury/:book*',
        destination: '/knihy/ray-bradbury/:book*',
        permanent: true
      },
      {
        source: '/reif-larsen/:book*',
        destination: '/knihy/reif-larsen/:book*',
        permanent: true
      },
      {
        source: '/roald-dahl/:book*',
        destination: '/knihy/roald-dahl/:book*',
        permanent: true
      },
      {
        source: '/sofi-oksanen/:book*',
        destination: '/knihy/sofi-oksanen/:book*',
        permanent: true
      },
      {
        source: '/stanislaw-lem/:book*',
        destination: '/knihy/stanislaw-lem/:book*',
        permanent: true
      },
      {
        source: '/stefan-zweig/:book*',
        destination: '/knihy/stefan-zweig/:book*',
        permanent: true
      },
      {
        source: '/stephen-leacock/:book*',
        destination: '/knihy/stephen-leacock/:book*',
        permanent: true
      },
      {
        source: '/tennessee-williams/:book*',
        destination: '/knihy/tennessee-williams/:book*',
        permanent: true
      },
      {
        source: '/tomas-zmeskal/:book*',
        destination: '/knihy/tomas-zmeskal/:book*',
        permanent: true
      },
      {
        source: '/tom-robbins/:book*',
        destination: '/knihy/tom-robbins/:book*',
        permanent: true
      },
      {
        source: '/truman-capote/:book*',
        destination: '/knihy/truman-capote/:book*',
        permanent: true
      },
      {
        source: '/vladislav-vancura/:book*',
        destination: '/knihy/vladislav-vancura/:book*',
        permanent: true
      },
      {
        source: '/william-golding/:book*',
        destination: '/knihy/william-golding/:book*',
        permanent: true
      },
      {
        source: '/william-shakespeare/:book*',
        destination: '/knihy/william-shakespeare/:book*',
        permanent: true
      },
      {
        source: '/william-styron/:book*',
        destination: '/knihy/william-styron/:book*',
        permanent: true
      },
      {
        source: '/zdenek-jirotka/:book*',
        destination: '/knihy/zdenek-jirotka/:book*',
        permanent: true
      },
    ]
  }
}
