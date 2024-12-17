const stories = [
    {
        title: "Creation of the World (Genesis 1–2) ",
        text: ` In the beginning, God created the heavens and the earth. Over six days, He shaped the formless void, speaking into existence light, the sky, dry land, vegetation, the sun, moon, stars, sea creatures, birds, land animals, and humankind. Each day’s creation was declared “good,” and humankind was made in God’s image to steward the earth. On the seventh day, God rested, blessing and sanctifying it.
God placed Adam, the first man, in the Garden of Eden to tend it, granting him the freedom to eat from any tree except the Tree of the Knowledge of Good and Evil. To provide companionship, God created Eve from Adam's rib. The two lived in harmony with each other, nature, and God, experiencing perfect peace in the garden.
This story emphasizes God's sovereignty, the sacredness of creation, and humankind's role as caretakers of the earth. It also establishes the Sabbath, a day of rest, as a divine institution. It sets the stage for humanity’s relationship with God and the subsequent fall.`,
        category: "Classic",
        tags: ["tragedy", "drama", "shakespeare"]
    },
    {
        title: " The Fall of Man (Genesis 3)",
        text: `In the Garden of Eden, a cunning serpent tempted Eve to eat the forbidden fruit from the Tree of the Knowledge of Good and Evil. Deceived by the serpent’s promise that eating the fruit would make her like God, Eve ate and shared it with Adam. Immediately, they realized their nakedness and felt shame.
When God confronted them, Adam blamed Eve, and Eve blamed the serpent. God pronounced judgments: the serpent would crawl on its belly and face enmity with humanity, childbirth would become painful for women, and the ground would be cursed, making labor difficult for men. Adam and Eve were banished from Eden, and cherubim guarded the tree of life to prevent their return.
This story explains the origin of sin and its consequences: separation from God, pain, and death. It also reveals God’s justice and mercy, as He clothed Adam and Eve before their exile.`,
        category: "Science Fiction",
        tags: ["robot", "dolphin", "ocean"]
    },
    {
        title: " Noah’s Ark and the Flood (Genesis 6–9)",
        text: ` Humanity became increasingly wicked, prompting God to grieve over His creation. However, Noah found favor with God due to his righteousness. God instructed Noah to build an ark and bring his family, along with pairs of every animal, to survive a global flood that would cleanse the earth.
After 40 days and nights of rain, the waters covered even the highest mountains. The ark floated for months until it rested on Mount Ararat. Noah sent out a raven and later a dove to determine if the waters had receded. When the dove returned with an olive leaf, Noah knew dry land was near.
God made a covenant with Noah, promising never to destroy the earth by flood again and setting the rainbow as a sign of this promise. This story highlights God's judgment against sin, the importance of obedience, and His covenant faithfulness.`,
        category: "Fantasy",
        tags: ["cloud", "rain", "magic"]
    },
    {
        title: " The Tower of Babel (Genesis 11:1–9)",
        text: `After the flood, humanity spoke one language and settled in the land of Shinar. They decided to build a city with a tower reaching the heavens to make a name for themselves and prevent dispersion across the earth. Their actions reflected pride and defiance of God’s command to fill the earth.
Seeing their unity and ambition, God confused their language, causing them to misunderstand one another. This disruption halted the construction, and the people scattered over the earth. The unfinished city was named Babel, meaning “confusion.”
The story explains the origin of diverse languages and underscores the dangers of pride and disobedience. It also reveals God’s sovereignty in ensuring His purposes are fulfilled.`,
        category: "Classic",
        tags: ["book", "library", "dust"]
    },
    {
        title: "The Call of Abraham (Genesis 12:1–9)",
        text: `God called Abram (later Abraham) to leave his homeland and family in Ur and go to a land He would show him. God promised to make Abram a great nation, bless him, and make his name great so that he would be a blessing to others. Abram obeyed, taking his wife Sarai, nephew Lot, and all their possessions to Canaan.
In Canaan, God reaffirmed His promise, declaring that Abram’s descendants would inherit the land. Abram built altars to worship the Lord at significant places where God appeared to him. Despite challenges, Abram's faith in God’s promise remained steadfast.
This story introduces Abraham as the father of faith, highlighting his obedience and trust in God. It also lays the foundation for God’s covenant with Israel and His plan of redemption for all nations.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " The Sacrifice of Isaac (Genesis 22:1–19)",
        text: `God tested Abraham’s faith by asking him to sacrifice his son, Isaac, the child of promise. Despite the difficulty of the command, Abraham obeyed, taking Isaac to Mount Moriah. Along the way, Isaac asked about the lamb for the offering, and Abraham responded, "God will provide."
At the altar, just as Abraham raised the knife to sacrifice Isaac, an angel of the Lord intervened, stopping him. God commended Abraham’s faith and provided a ram caught in a thicket as a substitute for Isaac. The place was named “The Lord Will Provide.”
This story demonstrates Abraham’s unwavering faith and foreshadows the ultimate sacrifice of Jesus Christ for humanity’s sins. It underscores God’s provision and His faithfulness to His promises.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " Joseph Sold into Slavery (Genesis 37)",
        text: `Joseph, Jacob’s favored son, received a colorful coat, sparking jealousy among his brothers. Joseph’s dreams, which foretold his family bowing to him, further fueled their hatred. Seizing an opportunity, the brothers plotted to kill him but instead sold him to Ishmaelite traders for twenty pieces of silver.
Joseph was taken to Egypt and sold to Potiphar, an official of Pharaoh. Meanwhile, his brothers dipped his coat in goat's blood, deceiving their father into believing Joseph was killed by a wild animal. Jacob mourned deeply for his lost son.
This story highlights themes of jealousy, betrayal, and God’s providence. It sets the stage for Joseph’s rise in Egypt and the eventual reconciliation of his family.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " The Ten Plagues and the Exodus (Exodus 7–12)",
        text: `God sent Moses to Pharaoh with a command to let the Israelites go from Egypt. Pharaoh’s refusal brought ten plagues upon Egypt: water turning to blood, frogs, gnats, flies, livestock disease, boils, hail, locusts, darkness, and the death of the firstborn. Each plague demonstrated God’s power and discredited Egypt’s gods.
The final plague, the death of the firstborn, led to the institution of the Passover. The Israelites marked their doorposts with lamb's blood so the angel of death would pass over their homes. Pharaoh finally relented, allowing the Israelites to leave Egypt.
This story emphasizes God’s power to deliver His people, His justice against oppression, and the significance of the Passover as a symbol of salvation.
`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " The Crossing of the Red Sea (Exodus 14)",
        text: `After the Israelites’ departure from Egypt, Pharaoh changed his mind and pursued them with his army. Trapped between the Red Sea and Pharaoh’s forces, the Israelites despaired. God instructed Moses to stretch out his staff over the sea, dividing the waters to create a dry path.
The Israelites crossed safely, but when the Egyptians pursued them, the waters returned, drowning the army. The Israelites celebrated their deliverance with a song of praise led by Moses and Miriam.
This story demonstrates God’s power to save His people and His faithfulness to His promises. It also foreshadows the victory over sin and death through Jesus Christ.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " The Ten Commandments (Exodus 19–20)",
        text: ` Three months after leaving Egypt, the Israelites camped at Mount Sinai. God descended in fire and smoke, and His voice thundered as He called Moses to the mountain. There, God established a covenant with Israel, giving them the Ten Commandments as the foundation of His laws.
The commandments covered duties to God—worshiping Him alone, keeping the Sabbath, and avoiding idolatry—and responsibilities toward others, such as honoring parents, and refraining from murder, theft, and false testimony. The people trembled at God’s presence, acknowledging His holiness.
This story underscores God’s holiness, His desire for a covenant relationship with His people, and the importance of living according to His laws. The commandments remain a moral guide for believers today.`,
       category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: "David and Goliath (1 Samuel 17)",
        text: ` Young David, a shepherd boy, visited the battlefield where Israel’s army faced the Philistines. The Philistine champion, Goliath, taunted Israel for forty days, challenging anyone to fight him. David, trusting in God’s power, volunteered to face the giant.
Rejecting King Saul’s armor, David approached Goliath with a sling and five stones. Declaring that the battle belonged to the Lord, David struck Goliath with a single stone to the forehead, killing him. Israel’s army routed the Philistines, inspired by David’s victory.
This story illustrates the power of faith and courage in overcoming seemingly impossible challenges. It highlights God’s ability to use unlikely individuals for His purposes.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " The Story of Ruth (Ruth 1–4)",
        text: ` During a famine in Bethlehem, a man named Elimelech moved with his wife, Naomi, and their two sons to Moab. After Elimelech died, Naomi’s sons married Moabite women, Orpah and Ruth. Tragically, both sons died as well, leaving Naomi and her daughters-in-law as widows. Hearing that the famine had ended, Naomi decided to return to Bethlehem and urged Orpah and Ruth to remain in Moab. Orpah tearfully stayed behind, but Ruth clung to Naomi, declaring, "Where you go, I will go; your people will be my people, and your God my God."
In Bethlehem, Ruth worked in the fields of Boaz, a relative of Naomi's late husband, to gather food for them. Boaz noticed Ruth’s loyalty to Naomi and showed her kindness, ensuring her safety and providing extra grain. Learning of Boaz’s favor, Naomi devised a plan for Ruth to seek Boaz as a kinsman-redeemer, a custom where a relative could marry a widow to preserve the family line. Ruth approached Boaz at the threshing floor, and he agreed to redeem her if a closer relative declined.
Boaz fulfilled his promise, marrying Ruth and redeeming Naomi’s family. Ruth bore a son, Obed, who became the grandfather of King David. This story demonstrates God’s providence, faithfulness, and ability to redeem even the most difficult situations. It also highlights Ruth’s remarkable loyalty and the lineage leading to Jesus Christ.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },

    {
        title: " Elijah and the Prophets of Baal (1 Kings 18:16–46)",
        text: ` During King Ahab's reign, Israel turned to Baal worship under the influence of Queen Jezebel. The prophet Elijah challenged the idolatry, calling for a contest on Mount Carmel between the God of Israel and Baal. Elijah summoned the people and 450 prophets of Baal, declaring that the true God would answer by fire.
The prophets of Baal prepared their sacrifice and called on their god from morning till evening, but no fire came. Elijah mocked their efforts, suggesting Baal might be sleeping. Then Elijah rebuilt the Lord's altar, drenched the sacrifice with water, and prayed. God answered with fire that consumed the offering, wood, stones, and water, proving His supremacy.
The people fell in worship, declaring, "The Lord—He is God!" Elijah commanded the execution of Baal’s prophets and prayed for rain, ending a three-year drought. This story highlights God’s power, Elijah’s faith, and the importance of turning back to the true God.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " Jonah and the City of Nineveh (Jonah 1–4)",
        text: ` God called Jonah to preach repentance to Nineveh, a great city notorious for its wickedness. Instead, Jonah fled on a ship bound for Tarshish, trying to escape God's command. A violent storm threatened the ship, and Jonah admitted he was the cause. He urged the sailors to throw him overboard, and as they did, the storm ceased. Jonah was swallowed by a great fish, where he prayed to God from its belly for three days and nights. God commanded the fish to vomit Jonah onto dry land.
Jonah finally obeyed and went to Nineveh, declaring God’s impending judgment. The people, from the king to the commoners, repented in sackcloth and ashes, and God relented from destroying the city. Jonah, however, was angry at God’s mercy and sulked outside the city. God used a plant and a worm to teach Jonah about compassion, emphasizing His love for all people.
This story reveals God’s mercy, the universal need for repentance, and the challenge of aligning our will with God’s purposes.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " Daniel in the Lions’ Den (Daniel 6)",
        text: ` Under King Darius’s rule, Daniel distinguished himself as a faithful servant of God and a capable administrator. Jealous officials plotted against him, convincing the king to issue a decree forbidding prayer to anyone but the king for thirty days. Despite the decree, Daniel continued praying to God openly.
The officials reported Daniel’s disobedience, and though Darius regretted the decree, he reluctantly ordered Daniel thrown into a lions’ den. That night, the king fasted, praying for Daniel’s safety. At dawn, he rushed to the den and found Daniel unharmed, protected by an angel who shut the lions’ mouths.
Darius issued a new decree honoring Daniel’s God, declaring Him the living God who delivers His people. This story demonstrates God’s power to save, the importance of steadfast faith, and His ability to turn trials into testimonies.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " Jesus Feeds the Five Thousand (Matthew 14:13–21; Mark 6:30–44; Luke 9:10–17; John 6:1–14)",
        text: ` After hearing of John the Baptist’s death, Jesus withdrew to a solitary place. Crowds followed Him, bringing their sick, and He compassionately healed them. As evening approached, the disciples suggested sending the crowd away to find food, but Jesus replied, "You give them something to eat." They only had five loaves and two fish.
Jesus instructed the crowd to sit, took the loaves and fish, gave thanks, and distributed them. Miraculously, the food multiplied, feeding over five thousand men, plus women and children. After everyone ate their fill, the disciples collected twelve baskets of leftovers.
This story highlights Jesus’ compassion, His power over creation, and His ability to meet physical and spiritual needs. It also emphasizes the importance of faith and giving what little we have to God.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " The Parable of the Prodigal Son (Luke 15:11–32)",
        text: ` Jesus told a parable of a man with two sons. The younger son demanded his inheritance early, left home, and squandered it on reckless living. When a famine struck, he was left destitute, tending pigs and longing to eat their food. Realizing his mistake, he decided to return to his father, hoping to be treated as a servant.
To his surprise, his father ran to meet him, embraced him, and restored him as a son. The father ordered a feast to celebrate his return, saying, "This son of mine was dead and is alive again; he was lost and is found." The older brother, however, resented the celebration, feeling his loyalty had gone unnoticed.
This parable illustrates God’s boundless grace, His joy in sinners’ repentance, and the challenge of self-righteousness. It reassures believers of God’s readiness to forgive and restore.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " Jesus Calms the Storm (Mark 4:35–41; Matthew 8:23–27; Luke 8:22–25)",
        text: ` One evening, Jesus and His disciples set out across the Sea of Galilee. As they sailed, Jesus fell asleep, and a violent storm arose, causing waves to crash into the boat. Terrified, the disciples believed they were about to perish. They woke Jesus, crying, "Teacher, don’t you care if we drown?"
Jesus arose and rebuked the wind and waves, saying, "Peace! Be still!" Immediately, the storm ceased, and the sea became calm. Turning to His disciples, He asked, "Why are you so afraid? Do you still have no faith?" Awestruck, the disciples marveled, "Who is this? Even the wind and waves obey Him!"
This story reveals Jesus’ authority over nature, His care for His followers, and the importance of faith amidst life’s storms. It reassures believers that Jesus is present and powerful in times of fear and uncertainty.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " The Good Samaritan (Luke 10:25–37)",
        text: ` When a lawyer asked Jesus how to inherit eternal life, Jesus pointed him to the Law: love God with all your heart and love your neighbor as yourself. Seeking to justify himself, the lawyer asked, "Who is my neighbor?" Jesus responded with a parable.
A man traveling from Jerusalem to Jericho was attacked by robbers, who left him half-dead. A priest and a Levite passed by but avoided helping. However, a Samaritan—a group despised by the Jews—stopped, tended the man’s wounds, and took him to an inn, paying for his care. Jesus asked, "Who was the neighbor to the man?" The lawyer replied, "The one who showed mercy." Jesus said, "Go and do likewise."
This parable teaches that true neighborly love transcends ethnic and social barriers, emphasizing compassion and action over mere words. It challenges believers to demonstrate God’s love in practical ways.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },
    {
        title: " The Crucifixion and Resurrection of Jesus (Matthew 27–28; Mark 15–16; Luke 23–24; John 19–20)",
        text: ` Jesus was arrested, falsely accused, and condemned to death by crucifixion under Roman authority. He was beaten, mocked, and crowned with thorns. Carrying His cross to Golgotha, He was crucified between two criminals. As He hung on the cross, Jesus prayed, "Father, forgive them, for they do not know what they are doing." Darkness covered the land, and Jesus cried out, "It is finished," before dying. The temple veil tore in two, symbolizing direct access to God.
Jesus’ body was buried in a sealed tomb, guarded by soldiers. On the third day, women visited the tomb and found it empty. An angel declared, "He is not here; He has risen!" Jesus appeared to His disciples, proving His resurrection by showing His wounds and eating with them. He commissioned them to spread the Gospel and ascended to heaven.
This story is the cornerstone of the Christian faith, demonstrating God’s love, the power of Jesus’ sacrifice for sin, and the hope of eternal life through His resurrection.`,
        category: "Fantasy",
        tags: ["park", "bench", "magic"]
    },

];


module.exports = stories;
