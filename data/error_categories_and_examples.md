# Error Categories and Examples

This file summarizes the error categories and curated examples. The full row-level local error records are in `all_errors.csv`.

## Table 4 Distribution

| Method | Local errors | Over | Under | Drift | Match target? |
|---|---:|---:|---:|---:|---|
| D Direct segmentation | 227 | 172 (75.8%) | 52 (22.9%) | 3 (1.3%) | True |
| P1 Identical-character projection | 211 | 120 (56.9%) | 88 (41.7%) | 3 (1.4%) | True |
| P2 Similarity-based projection | 176 | 88 (50.0%) | 84 (47.7%) | 4 (2.3%) | True |

## Curated G/B Pattern Examples

## G B B

### Top 2

#### G B B / sentence_id: 232

Source: 昨天下雨很多。

Target: 昨天下了很多雨。

Gold: 昨天 下雨 很 多 。

D: 昨天 下雨 很 多 。

P1: 昨天 下雨 很多 。

P2: 昨天 下雨 很多 。

Affected span: 很多 [4, 6)

Why useful: Direct segmentation is correct but projection-based outputs fail on this span (很多); useful as a limitation.

Explanation: D matches the gold token span. P1 is under: 很 / 多 -> 很多. P2 is under: 很 / 多 -> 很多.

#### G B B / sentence_id: 578

Source: 而且它再不能作售品卖了。

Target: 而且它再也不能作为售品卖了。

Gold: 而且 它 再不能 作 售品 卖 了 。

D: 而且 它 再不能 作 售品 卖 了 。

P1: 而且 它 再 不 能 作 售品 卖 了 。

P2: 而且 它 再 不 能 作 售品 卖 了 。

Affected span: 再不能 [3, 6)

Why useful: Direct segmentation is correct but projection-based outputs fail on this span (再不能); useful as a limitation.

Explanation: D matches the gold token span. P1 is over: 再不能 -> 再 / 不 / 能. P2 is over: 再不能 -> 再 / 不 / 能.

### Additional candidates

#### G B B / sentence_id: 310

Source: 但以前听说过，早恋引起了不好事。

Target: 但以前听说过，早恋带来了不好的事。

Gold: 但 以前 听说 过 ， 早恋 引起 了 不好 事 。

D: 但 以前 听说 过 ， 早恋 引起 了 不好 事 。

P1: 但 以前 听说 过 ， 早恋 引起 了 不好事 。

P2: 但 以前 听说 过 ， 早恋 引起 了 不好事 。

Affected span: 不好事 [12, 15)

Why useful: Direct segmentation is correct but projection-based outputs fail on this span (不好事); useful as a limitation.

#### G B B / sentence_id: 864

Source: 我有哥哥，不过我们里阿关系不好！

Target: 我有哥哥，不过我们关系不好！

Gold: 我 有 哥哥 ， 不过 我们 里 阿 关系 不好 ！

D: 我 有 哥哥 ， 不过 我们 里 阿 关系 不好 ！

P1: 我 有 哥哥 ， 不过 我们 里阿 关系 不好 ！

P2: 我 有 哥哥 ， 不过 我们 里阿 关系 不好 ！

Affected span: 里阿 [9, 11)

Why useful: Direct segmentation is correct but projection-based outputs fail on this span (里阿); useful as a limitation.

#### G B B / sentence_id: 41

Source: 而每一代的年轻时代都有不同的音乐调。

Target: 而每一代的年轻时代都有不同的音乐曲调。

Gold: 而 每 一代 的 年轻 时代 都 有 不同 的 音乐 调 。

D: 而 每 一代 的 年轻 时代 都 有 不同 的 音乐 调 。

P1: 而 每 一代 的 年轻 时代 都 有 不同 的 音乐调 。

P2: 而 每 一代 的 年轻 时代 都 有 不同 的 音乐调 。

Affected span: 音乐调 [14, 17)

Why useful: Direct segmentation is correct but projection-based outputs fail on this span (音乐调); useful as a limitation.

## G B G

### Top 2

#### G B G / sentence_id: 666

Source: 我朋友现在在泰国陆游。

Target: 我朋友现在在泰国旅游。

Gold: 我 朋友 现在 在 泰国 陆游 。

D: 我 朋友 现在 在 泰国 陆游 。

P1: 我 朋友 现在 在 泰国 陆 游 。

P2: 我 朋友 现在 在 泰国 陆游 。

Affected span: 陆游 [8, 10)

Why useful: P1 introduces an error but P2 restores the gold span (陆游).

Explanation: D matches the gold token span. P1 is over: 陆游 -> 陆 / 游. P2 matches the gold token span.

#### G B G / sentence_id: 101

Source: 反正，爸爸，我真的很祝贺你的生日。

Target: 反正，爸爸，我真诚地祝贺你的生日。

Gold: 反正 ， 爸爸 ， 我 真的 很 祝贺 你 的 生日 。

D: 反正 ， 爸爸 ， 我 真的 很 祝贺 你 的 生日 。

P1: 反正 ， 爸爸 ， 我 真 的 很 祝贺 你 的 生日 。

P2: 反正 ， 爸爸 ， 我 真的 很 祝贺 你 的 生日 。

Affected span: 真的 [7, 9)

Why useful: P1 introduces an error but P2 restores the gold span (真的).

Explanation: D matches the gold token span. P1 is over: 真的 -> 真 / 的. P2 matches the gold token span.

### Additional candidates

#### G B G / sentence_id: 1107

Source: 总得来说，对孩子的教育父母有第一责任的。

Target: 总的来说，对孩子的教育父母是有第一责任的。

Gold: 总得来说 ， 对 孩子 的 教育 父母 有 第一 责任 的 。

D: 总得来说 ， 对 孩子 的 教育 父母 有 第一 责任 的 。

P1: 总得 来说 ， 对 孩子 的 教育 父母 有 第一 责任 的 。

P2: 总得来说 ， 对 孩子 的 教育 父母 有 第一 责任 的 。

Affected span: 总得来说 [0, 4)

Why useful: P1 introduces an error but P2 restores the gold span (总得来说).

#### G B G / sentence_id: 1115

Source: 吸烟者觉得没有吸烟得话不能休息精神。

Target: 吸烟者觉得没有吸烟的话不能放松精神。

Gold: 吸烟者 觉得 没有 吸烟 得话 不 能 休息 精神 。

D: 吸烟者 觉得 没有 吸烟 得话 不 能 休息 精神 。

P1: 吸烟者 觉得 没有 吸烟 得 话 不 能 休息 精神 。

P2: 吸烟者 觉得 没有 吸烟 得话 不 能 休息 精神 。

Affected span: 得话 [9, 11)

Why useful: P1 introduces an error but P2 restores the gold span (得话).

#### G B G / sentence_id: 501

Source: 西班牙的生活有好处和坏处。我来讲你们坏处之一。

Target: 西班牙的生活有好处和坏处。我来给你们讲坏处之一。

Gold: 西班牙 的 生活 有 好处 和 坏处 。 我 来 讲 你们 坏处 之一 。

D: 西班牙 的 生活 有 好处 和 坏处 。 我 来 讲 你们 坏处 之一 。

P1: 西班牙 的 生活 有 好处 和 坏处 。 我 来讲 你们 坏处 之一 。

P2: 西班牙 的 生活 有 好处 和 坏处 。 我 来 讲 你们 坏处 之一 。

Affected span: 来讲 [14, 16)

Why useful: P1 introduces an error but P2 restores the gold span (来讲).

## B B G

### Top 2

#### B B G / sentence_id: 254

Source: 上次考试我的了初级5。

Target: 上次考试我得了初级5。

Gold: 上次 考试 我 的了 初级 5 。

D: 上次 考试 我 的 了 初级 5 。

P1: 上次 考试 我 的 了 初级 5 。

P2: 上次 考试 我 的了 初级 5 。

Affected span: 的了 [5, 7)

Why useful: P2 corrects a span where both D and P1 fail (的了).

Explanation: D is over: 的了 -> 的 / 了. P1 is over: 的了 -> 的 / 了. P2 matches the gold token span.

#### B B G / sentence_id: 242

Source: 至令我没看过那么美丽的风景。

Target: 至今我没看到过那么美丽的风景。

Gold: 至令 我 没 看 过 那么 美丽 的 风景 。

D: 至 令 我 没 看 过 那么 美丽 的 风景 。

P1: 至 令 我 没 看 过 那么 美丽 的 风景 。

P2: 至令 我 没 看 过 那么 美丽 的 风景 。

Affected span: 至令 [0, 2)

Why useful: P2 corrects a span where both D and P1 fail (至令).

Explanation: D is over: 至令 -> 至 / 令. P1 is over: 至令 -> 至 / 令. P2 matches the gold token span.

### Additional candidates

#### B B G / sentence_id: 209

Source: 所以，如果你要流利地谈外语话，你必该练习口语。

Target: 所以，如果你要流利地说外语，你必须练习口语。

Gold: 所以 ， 如果 你 要 流利 地 谈 外语 话 ， 你 必该 练习 口语 。

D: 所以 ， 如果 你 要 流利 地 谈 外语 话 ， 你 必 该 练习 口语 。

P1: 所以 ， 如果 你 要 流利 地 谈 外语话 ， 你 必 该 练习 口语 。

P2: 所以 ， 如果 你 要 流利 地 谈 外语话 ， 你 必该 练习 口语 。

Affected span: 必该 [16, 18)

Why useful: P2 corrects a span where both D and P1 fail (必该).

#### B B G / sentence_id: 838

Source: 在中国都有一些人和欧洲人的生活方式一燕，但他们不破坏他们的中国教育基础。

Target: 在中国有一些人和欧洲人的生活方式一样，但他们不破坏他们的中国教育基础。

Gold: 在 中国 都 有 一些 人 和 欧洲人 的 生活 方式 一燕 ， 但 他们 不 破坏 他们 的 中国 教育 基础 。

D: 在 中国 都 有 一些 人 和 欧洲人 的 生活 方式 一 燕 ， 但 他们 不 破坏 他们 的 中国 教育 基础 。

P1: 在 中国 都 有 一些 人 和 欧洲人 的 生活 方式 一 燕 ， 但 他们 不 破坏 他们 的 中国 教育 基础 。

P2: 在 中国 都 有 一些 人 和 欧洲人 的 生活 方式 一燕 ， 但 他们 不 破坏 他们 的 中国 教育 基础 。

Affected span: 一燕 [17, 19)

Why useful: P2 corrects a span where both D and P1 fail (一燕).

#### B B G / sentence_id: 166

Source: 而且最近肥胖的人越来越增长，要减肥的人越来数多。这都是生活丰盛带来的一种社会现象。

Target: 而且最近肥胖的人越来越多，要减肥的人也越来越多。这都是生活富足带来的一种社会现象。

Gold: 而且 最近 肥胖 的 人 越来越 增长 ， 要 减肥 的 人 越来数 多 。 这 都 是 生活 丰盛 带来 的 一 种 社会 现象 。

D: 而且 最近 肥胖 的 人 越来越 增长 ， 要 减肥 的 人 越来 数 多 。 这 都 是 生活 丰盛 带来 的 一 种 社会 现象 。

P1: 而且 最近 肥胖 的 人 越来越 增长 ， 要 减肥 的 人 越来 数 多 。 这 都 是 生活 丰盛 带来 的 一 种 社会 现象 。

P2: 而且 最近 肥胖 的 人 越来越 增长 ， 要 减肥 的 人 越来数 多 。 这 都 是 生活 丰盛 带来 的 一 种 社会 现象 。

Affected span: 越来数 [19, 22)

Why useful: P2 corrects a span where both D and P1 fail (越来数).

## B G G

### Top 2

#### B G G / sentence_id: 74

Source: 这样的恶循环没完没了。

Target: 这样的恶性循环没完没了。

Gold: 这样 的 恶循环 没完没了 。

D: 这样 的 恶 循环 没完没了 。

P1: 这样 的 恶循环 没完没了 。

P2: 这样 的 恶循环 没完没了 。

Affected span: 恶循环 [3, 6)

Why useful: Projection already corrects D's error and P2 preserves the correct span (恶循环).

Explanation: D is over: 恶循环 -> 恶 / 循环. P1 matches the gold token span. P2 matches the gold token span.

#### B G G / sentence_id: 286

Source: 我本生喜欢听流行歌曲。

Target: 我本身喜欢听流行歌曲。

Gold: 我 本生 喜欢 听 流行歌曲 。

D: 我 本生 喜欢 听 流行 歌曲 。

P1: 我 本生 喜欢 听 流行歌曲 。

P2: 我 本生 喜欢 听 流行歌曲 。

Affected span: 流行歌曲 [6, 10)

Why useful: Projection already corrects D's error and P2 preserves the correct span (流行歌曲).

Explanation: D is over: 流行歌曲 -> 流行 / 歌曲. P1 matches the gold token span. P2 matches the gold token span.

### Additional candidates

#### B G G / sentence_id: 470

Source: 我的宿舍是一座十吾层的楼房。

Target: 我的宿舍是一座十层的楼房。

Gold: 我 的 宿舍 是 一 座 十吾 层 的 楼房 。

D: 我 的 宿舍 是 一 座 十 吾 层 的 楼房 。

P1: 我 的 宿舍 是 一 座 十吾 层 的 楼房 。

P2: 我 的 宿舍 是 一 座 十吾 层 的 楼房 。

Affected span: 十吾 [7, 9)

Why useful: Projection already corrects D's error and P2 preserves the correct span (十吾).

#### B G G / sentence_id: 589

Source: 我们任何地方都容易看见这样的坏拉圾。

Target: 我们在任何地方都容易看见这样的坏垃圾。

Gold: 我们 任何 地方 都 容易 看见 这样 的 坏 拉圾 。

D: 我们 任何 地方 都 容易 看见 这样 的 坏拉圾 。

P1: 我们 任何 地方 都 容易 看见 这样 的 坏 拉圾 。

P2: 我们 任何 地方 都 容易 看见 这样 的 坏 拉圾 。

Affected span: 坏拉圾 [14, 17)

Why useful: Projection already corrects D's error and P2 preserves the correct span (坏拉圾).

#### B G G / sentence_id: 873

Source: 现在我也喜欢根儿子和丈夫们一起旅行。

Target: 现在我也喜欢跟儿子和丈夫他们一起旅行。

Gold: 现在 我 也 喜欢 根 儿子 和 丈夫 们 一起 旅行 。

D: 现在 我 也 喜欢 根儿子 和 丈夫 们 一起 旅行 。

P1: 现在 我 也 喜欢 根 儿子 和 丈夫 们 一起 旅行 。

P2: 现在 我 也 喜欢 根 儿子 和 丈夫 们 一起 旅行 。

Affected span: 根儿子 [6, 9)

Why useful: Projection already corrects D's error and P2 preserves the correct span (根儿子).

## Method-specific 2+ Error Sentence Candidates

This section follows the frontend filter logic: a sentence is listed when one selected method has two or more local error spans. Counts are method-specific, not summed across D, P1, and P2.

### D: D Direct segmentation has 2+ errors

Total sentences: 26

#### Top candidates

##### sentence_id: 45

Source: 我自眼看见了：为了孩了。父母什么都作。

Target: 我亲眼看见了：为了孩子，父母什么都做。

Gold: 我 自眼 看见 了 ： 为了 孩了 。 父母 什么 都 作 。

D: 我 自 眼 看见 了 ： 为了 孩 了 。 父母 什么 都 作 。

D local errors: 2

Local spans: over span `自眼` [1,3); over span `孩了` [9,11)

##### sentence_id: 202

Source: 如果贵公司肯聘请我，信相对你们来说是百利而无一弊的。

Target: 如果贵公司肯聘请我，我相信对你们来说是有百利而无一弊的。

Gold: 如果 贵 公司 肯 聘请 我 ， 信相 对 你们 来说 是 百 利而 无一弊 的 。

D: 如果 贵 公司 肯 聘请 我 ， 信 相对 你们 来说 是 百利而 无 一弊 的 。

D local errors: 3

Local spans: drift span `信相对` [10,13); under span `百利而` [18,21); over span `无一弊` [21,24)

##### sentence_id: 584

Source: 目前在我国的流行歌曲越多越发展。差不多每个星期一两次举行流行歌曲会。

Target: 目前我国的流行歌曲发展的越来越多，差不多每个星期举行一两次流行歌曲会。

Gold: 目前 在 我国 的 流行歌曲 越多越 发展 。 差不多 每个 星期 一两 次 举行 流行歌曲 会 。

D: 目前 在 我国 的 流行 歌曲 越 多 越 发展 。 差不多 每个 星期一 两 次 举行 流行歌曲会 。

D local errors: 4

Local spans: over span `流行歌曲` [6,10); over span `越多越` [10,13); drift span `星期一两` [21,25); under span `流行歌曲会` [28,33)

##### sentence_id: 958

Source: 去年我们决定在挪威去。我们已经乘船去过一次挪威了。很喜欢这次航行的起点是阿姆斯特丹。

Target: 去年我们决定去挪威。我们已经乘船去过一次挪威了。我们很喜欢这次航行的起点：阿姆斯特丹。

Gold: 去年 我们 决定 在 挪威 去 。 我们 已经 乘 船 去 过 一 次 挪威 了 。 很 喜欢 这 次 航行 的 起点 是 阿姆斯特丹 。

D: 去年 我们 决定 在 挪威 去 。 我们 已经 乘船 去 过 一 次 挪威 了 。 很 喜欢 这次 航行 的 起点 是 阿姆斯特丹 。

D local errors: 2

Local spans: under span `乘船` [15,17); under span `这次` [28,30)

##### sentence_id: 354

Source: 在流行歌曲里我不能找到音乐的美丽，歌词的魅力，听它的时候我没什么感觉，只有人造的无议音调。

Target: 我不能在流行歌曲里找到音乐的美丽，歌词的魅力，所以听它的时候我没什么感觉，感觉只有人造的无意义的音调。

Gold: 在 流行 歌曲 里 我 不 能 找到 音乐 的 美丽 ， 歌词 的 魅力 ， 听 它 的 时候 我 没 什么 感觉 ， 只有 人造 的 无 议 音调 。

D: 在 流行歌曲 里 我 不 能 找到 音乐 的 美丽 ， 歌词 的 魅力 ， 听 它 的 时候 我 没什么 感觉 ， 只有 人造 的 无 议 音调 。

D local errors: 2

Local spans: under span `流行歌曲` [1,5); under span `没什么` [29,32)

##### sentence_id: 26

Source: 跟旅行困可以去野外看看野生动物。这是很有意思。在大自然里可以做名种名样放松的活动，比如瑜伽、爬山、打猎。

Target: 跟旅行团可以去野外看野生动物，这很有意思。在大自然里可以做各种各样放松的活动，比如瑜伽、爬山、打猎。

Gold: 跟 旅行困 可以 去 野外 看看 野生 动物 。 这 是 很 有意思 。 在 大自然 里 可以 做 名种名样 放松 的 活动 ， 比如 瑜伽 、 爬山 、 打猎 。

D: 跟 旅行 困 可以 去 野外 看看 野生 动物 。 这 是 很 有意思 。 在 大自然 里 可以 做 名种 名样 放松 的 活动 ， 比如 瑜伽 、 爬山 、 打猎 。

D local errors: 2

Local spans: over span `旅行困` [1,4); over span `名种名样` [31,35)

##### sentence_id: 713

Source: 第二，男女分班教育给孩子封建思想。听说女子学校里教的内容是女子一定会做饭、做布等家务，而男子学校不教那种学科。

Target: 第二，男女分班教育给孩子灌输封建思想。听说女子学校里教的内容是女子一定要会做饭、做布等家务，而男子学校不教那种学科。

Gold: 第二 ， 男女 分 班 教育 给 孩子 封建 思想 。 听说 女子 学校 里 教 的 内容 是 女子 一定 会 做饭 、 做 布 等 家务 ， 而 男子 学校 不 教 那种 学科 。

D: 第二 ， 男女 分班 教育 给 孩子 封建 思想 。 听说 女子 学校 里 教 的 内容 是 女子 一定 会 做饭 、 做 布 等 家务 ， 而 男子 学校 不 教 那 种 学科 。

D local errors: 2

Local spans: under span `分班` [5,7); over span `那种` [50,52)

##### sentence_id: 1109

Source: 之所以是因为不是人演出的而是机器做的，而且有的歌曲从我看来是噪音，非常难听。有的歌曲可以使我非常紧张真致生气。

Target: 之所以不是人演出来的而是机器造的，是因为有的歌曲在我看来是噪音，非常难听，有的歌曲使我非常紧张甚至生气。

Gold: 之所以 是 因为 不 是 人 演 出 的 而是 机器 做 的 ， 而且 有的 歌曲 从 我 看来 是 噪音 ， 非常 难听 。 有的 歌曲 可以 使 我 非常 紧张 真致 生气 。

D: 之所以 是 因为 不 是 人 演出 的 而是 机器 做 的 ， 而且 有的 歌曲 从 我 看来 是 噪音 ， 非常 难听 。 有的 歌曲 可以 使 我 非常 紧张 真 致 生气 。

D local errors: 2

Local spans: under span `演出` [9,11); over span `真致` [50,52)

##### sentence_id: 609

Source: 有很多的一部分人，都在讲究自己食用的食品是不是绿色的。那当生活过的去的人，一定不会食用带有化学污染的食品来危害自己。

Target: 有很大的一部分人，都在讲究自己食用的食品是不是绿色的。那些生活过得去的人，一定不会食用带有化学污染的食品来危害自己。

Gold: 有 很多 的 一部分 人 ， 都 在 讲究 自己 食用 的 食品 是 不 是 绿色 的 。 那当 生活 过的去 的 人 ， 一定 不 会 食用 带有 化学 污染 的 食品 来 危害 自己 。

D: 有 很多 的 一部分 人 ， 都 在 讲究 自己 食用 的 食品 是 不 是 绿色 的 。 那 当 生活 过 的 去 的 人 ， 一定 不 会 食用 带有 化学 污染 的 食品 来 危害 自己 。

D local errors: 2

Local spans: over span `那当` [27,29); over span `过的去` [31,34)

##### sentence_id: 603

Source: 吸烟的时候，因为香烟的有害物质，肝、肺等器官容易变坏，如果多吸烟的话，会得严重的病。特别是青少年吸烟的话，他们会受得成长障碍。

Target: 吸烟的时候，因为香烟的有害物质，肝、肺等器官容易变坏，如果多吸烟的话，会得严重的病。特别是青少年吸烟的话，他们的成长会受到阻碍。

Gold: 吸烟 的 时候 ， 因为 香烟 的 有害 物质 ， 肝 、 肺 等 器官 容易 变 坏 ， 如果 多 吸烟 的话 ， 会 得 严重 的 病 。 特别 是 青少年 吸烟 的话 ， 他们 会 受得 成长 障碍 。

D: 吸烟 的 时候 ， 因为 香烟 的 有害 物质 ， 肝 、 肺 等 器官 容易 变 坏 ， 如果 多 吸烟 的话 ， 会 得 严重 的 病 。 特别 是 青少年 吸烟 的 话 ， 他们 会 受 得 成长 障碍 。

D local errors: 2

Local spans: over span `的话` [50,52); over span `受得` [56,58)

#### All sentence_ids

45, 202, 584, 958, 354, 26, 713, 1109, 609, 603, 500, 153, 992, 647, 390, 949, 28, 56, 1029, 683, 1046, 428, 435, 338, 541, 973

### P1: P1 Identical-character projection has 2+ errors

Total sentences: 22

#### Top candidates

##### sentence_id: 209

Source: 所以，如果你要流利地谈外语话，你必该练习口语。

Target: 所以，如果你要流利地说外语，你必须练习口语。

Gold: 所以 ， 如果 你 要 流利 地 谈 外语 话 ， 你 必该 练习 口语 。

P1: 所以 ， 如果 你 要 流利 地 谈 外语话 ， 你 必 该 练习 口语 。

P1 local errors: 2

Local spans: under span `外语话` [11,14); over span `必该` [16,18)

##### sentence_id: 385

Source: 老板批评其他的经理，说他们画饼充饥，只清谈，不无实际，互相吹捧。

Target: 老板批评其他的经理，说他们画饼充饥，只空谈，不切实际，互相吹捧。

Gold: 老板 批评 其他 的 经理 ， 说 他们 画饼充饥 ， 只 清谈 ， 不无实际 ， 互相 吹捧 。

P1: 老板 批评 其他 的 经理 ， 说 他们 画饼充饥 ， 只 清 谈 ， 不无 实际 ， 互相 吹捧 。

P1 local errors: 2

Local spans: over span `清谈` [19,21); over span `不无实际` [22,26)

##### sentence_id: 1086

Source: 在公共场所来老弱男女。在公共场所吸抽就意味着，不抽烟者都被吸呼烟。

Target: 在公共场所有男女老幼，所以在公共场所抽烟就意味着这些不抽烟者都得被迫吸烟。

Gold: 在 公共场所 来 老弱男女 。 在 公共场所 吸抽 就 意味着 ， 不抽烟者 都 被 吸 呼 烟 。

P1: 在 公共场所 来 老 弱 男女 。 在 公共场所 吸 抽 就 意味着 ， 不抽烟者 都 被 吸呼烟 。

P1 local errors: 3

Local spans: over span `老弱男女` [6,10); over span `吸抽` [16,18); under span `吸呼烟` [29,32)

##### sentence_id: 584

Source: 目前在我国的流行歌曲越多越发展。差不多每个星期一两次举行流行歌曲会。

Target: 目前我国的流行歌曲发展的越来越多，差不多每个星期举行一两次流行歌曲会。

Gold: 目前 在 我国 的 流行歌曲 越多越 发展 。 差不多 每个 星期 一两 次 举行 流行歌曲 会 。

P1: 目前 在 我国 的 流行歌曲 越 多 越 发展 。 差不多 每个 星期一两 次 举行 流行歌曲 会 。

P1 local errors: 2

Local spans: over span `越多越` [10,13); under span `星期一两` [21,25)

##### sentence_id: 354

Source: 在流行歌曲里我不能找到音乐的美丽，歌词的魅力，听它的时候我没什么感觉，只有人造的无议音调。

Target: 我不能在流行歌曲里找到音乐的美丽，歌词的魅力，所以听它的时候我没什么感觉，感觉只有人造的无意义的音调。

Gold: 在 流行 歌曲 里 我 不 能 找到 音乐 的 美丽 ， 歌词 的 魅力 ， 听 它 的 时候 我 没 什么 感觉 ， 只有 人造 的 无 议 音调 。

P1: 在 流行 歌曲 里 我 不 能 找到 音乐 的 美丽 ， 歌词 的 魅力 ， 听 它 的 时候 我 没 什么 感觉 ， 只 有 人造 的 无议 音调 。

P1 local errors: 2

Local spans: over span `只有` [35,37); under span `无议` [40,42)

##### sentence_id: 1078

Source: 在三亚机中国人可以说英语，因为在那里有很多游者。我觉得三亚是一个非常票连得城市，但海口没有意思。

Target: 在三亚，中国人可以说英语，因为那里有很多游者。我觉得三亚是一个非常漂亮的城市，但海口没有意思。

Gold: 在 三亚 机 中国 人 可以 说 英语 ， 因为 在 那里 有 很多 游者 。 我 觉得 三亚 是 一个 非常 票连 得 城市 ， 但 海口 没有 意思 。

P1: 在 三亚机 中国 人 可以 说 英语 ， 因为 在 那里 有 很多 游者 。 我 觉得 三亚 是 一个 非常 票 连 得 城市 ， 但 海口 没有 意思 。

P1 local errors: 2

Local spans: under span `三亚机` [1,4); over span `票连` [34,36)

##### sentence_id: 26

Source: 跟旅行困可以去野外看看野生动物。这是很有意思。在大自然里可以做名种名样放松的活动，比如瑜伽、爬山、打猎。

Target: 跟旅行团可以去野外看野生动物，这很有意思。在大自然里可以做各种各样放松的活动，比如瑜伽、爬山、打猎。

Gold: 跟 旅行困 可以 去 野外 看看 野生 动物 。 这 是 很 有意思 。 在 大自然 里 可以 做 名种名样 放松 的 活动 ， 比如 瑜伽 、 爬山 、 打猎 。

P1: 跟 旅行 困 可以 去 野外 看看 野生 动物 。 这 是 很 有意思 。 在 大自然 里 可以 做 名种 名样 放松 的 活动 ， 比如 瑜伽 、 爬山 、 打猎 。

P1 local errors: 2

Local spans: over span `旅行困` [1,4); over span `名种名样` [31,35)

##### sentence_id: 178

Source: 现在电视上很多明星为了当成一位流行歌手奋斗着。他们一律唱着所谓流行歌曲。什么叫流行歌曲？那就是被很多人受欢迎的歌曲。

Target: 现在电视上很多明星为了当一位流行歌手而奋斗。他们一律唱着所谓的流行歌曲。什么叫流行歌曲？那就是被很多人喜欢的歌曲。

Gold: 现在 电视 上 很多 明星 为了 当成 一 位 流行歌手 奋斗 着 。 他们 一律 唱 着 所谓 流行 歌曲 。 什么 叫 流行 歌曲 ？ 那 就是 被 很多 人 受 欢迎 的 歌曲 。

P1: 现在 电视 上 很多 明星 为了 当成 一 位 流行 歌手 奋斗 着 。 他们 一律 唱 着 所谓 流行 歌曲 。 什么 叫 流行 歌曲 ？ 那 就 是 被 很多 人 受 欢迎 的 歌曲 。

P1 local errors: 2

Local spans: over span `流行歌手` [15,19); over span `就是` [45,47)

##### sentence_id: 609

Source: 有很多的一部分人，都在讲究自己食用的食品是不是绿色的。那当生活过的去的人，一定不会食用带有化学污染的食品来危害自己。

Target: 有很大的一部分人，都在讲究自己食用的食品是不是绿色的。那些生活过得去的人，一定不会食用带有化学污染的食品来危害自己。

Gold: 有 很多 的 一部分 人 ， 都 在 讲究 自己 食用 的 食品 是 不 是 绿色 的 。 那当 生活 过的去 的 人 ， 一定 不 会 食用 带有 化学 污染 的 食品 来 危害 自己 。

P1: 有 很多 的 一部分 人 ， 都 在 讲究 自己 食用 的 食品 是 不 是 绿色 的 。 那 当 生活 过 的 去 的 人 ， 一定 不 会 食用 带有 化学 污染 的 食品 来 危害 自己 。

P1 local errors: 2

Local spans: over span `那当` [27,29); over span `过的去` [31,34)

##### sentence_id: 992

Source: 我厌倦张华得很多。而且有一天，他使我惊奋。在白莱河的旁边我们走着，张华照样自吹自擂。忽然我们看见一只狗。它似乎淹死呢。张华马上弹跳河，救了它。

Target: 我厌倦张华。但是有一天，他使我震惊。我们走在白莱河的旁边，张华照样自吹自擂。忽然我们看见一只狗。它似乎快要淹死了。张华马上跳进河里，救了它。

Gold: 我 厌倦 张华 得 很 多 。 而且 有 一 天 ， 他 使 我 惊奋 。 在 白莱河 的 旁边 我们 走 着 ， 张华 照样 自吹自擂 。 忽然 我们 看见 一 只 狗 。 它 似乎 淹 死 呢 。 张华 马上 弹 跳 河 ， 救 了 它 。

P1: 我 厌倦 张华 得 很多 。 而且 有 一 天 ， 他 使 我 惊奋 。 在 白莱河 的 旁边 我们 走 着 ， 张华 照样 自吹自擂 。 忽然 我们 看见 一 只 狗 。 它 似乎 淹 死 呢 。 张华 马上 弹跳 河 ， 救 了 它 。

P1 local errors: 2

Local spans: under span `很多` [6,8); under span `弹跳` [63,65)

#### All sentence_ids

209, 385, 1086, 584, 354, 1078, 26, 178, 609, 992, 415, 28, 40, 375, 568, 683, 428, 601, 973, 818, 776, 965

### P2: P2 Similarity-based projection has 2+ errors

Total sentences: 18

#### Top candidates

##### sentence_id: 1086

Source: 在公共场所来老弱男女。在公共场所吸抽就意味着，不抽烟者都被吸呼烟。

Target: 在公共场所有男女老幼，所以在公共场所抽烟就意味着这些不抽烟者都得被迫吸烟。

Gold: 在 公共场所 来 老弱男女 。 在 公共场所 吸抽 就 意味着 ， 不抽烟者 都 被 吸 呼 烟 。

P2: 在 公共场所 来 老 弱 男女 。 在 公共场所 吸 抽 就 意味着 ， 不抽烟者 都 被 吸呼烟 。

P2 local errors: 3

Local spans: over span `老弱男女` [6,10); over span `吸抽` [16,18); under span `吸呼烟` [29,32)

##### sentence_id: 584

Source: 目前在我国的流行歌曲越多越发展。差不多每个星期一两次举行流行歌曲会。

Target: 目前我国的流行歌曲发展的越来越多，差不多每个星期举行一两次流行歌曲会。

Gold: 目前 在 我国 的 流行歌曲 越多越 发展 。 差不多 每个 星期 一两 次 举行 流行歌曲 会 。

P2: 目前 在 我国 的 流行歌曲 越 多 越 发展 。 差不多 每个 星期一两 次 举行 流行歌曲 会 。

P2 local errors: 2

Local spans: over span `越多越` [10,13); under span `星期一两` [21,25)

##### sentence_id: 46

Source: 生物質能利用光合的现象。囤积的有机物是农场开发的。地热能在于抽取地面里的来创造热气电力。

Target: 生物质能是农场的植物利用光合作用囤积的有机物中含有的能量。地热能是由地壳抽取的以热力形式存在的能量，并且可用来创造电力。

Gold: 生物質能 利用 光合 的 现象 。 囤积 的 有机物 是 农场 开发 的 。 地热能 在于 抽取 地面 里 的 来 创造 热气 电力 。

P2: 生物 質 能 利用 光合 的 现象 。 囤积 的 有机物 是 农场 开 发 的 。 地热能 在于 抽取 地面 里 的 来 创造 热气 电力 。

P2 local errors: 2

Local spans: over span `生物質能` [0,4); over span `开发` [21,23)

##### sentence_id: 354

Source: 在流行歌曲里我不能找到音乐的美丽，歌词的魅力，听它的时候我没什么感觉，只有人造的无议音调。

Target: 我不能在流行歌曲里找到音乐的美丽，歌词的魅力，所以听它的时候我没什么感觉，感觉只有人造的无意义的音调。

Gold: 在 流行 歌曲 里 我 不 能 找到 音乐 的 美丽 ， 歌词 的 魅力 ， 听 它 的 时候 我 没 什么 感觉 ， 只有 人造 的 无 议 音调 。

P2: 在 流行 歌曲 里 我 不 能 找到 音乐 的 美丽 ， 歌词 的 魅力 ， 听 它 的 时候 我 没 什么 感觉 ， 只 有 人造 的 无议 音调 。

P2 local errors: 2

Local spans: over span `只有` [35,37); under span `无议` [40,42)

##### sentence_id: 178

Source: 现在电视上很多明星为了当成一位流行歌手奋斗着。他们一律唱着所谓流行歌曲。什么叫流行歌曲？那就是被很多人受欢迎的歌曲。

Target: 现在电视上很多明星为了当一位流行歌手而奋斗。他们一律唱着所谓的流行歌曲。什么叫流行歌曲？那就是被很多人喜欢的歌曲。

Gold: 现在 电视 上 很多 明星 为了 当成 一 位 流行歌手 奋斗 着 。 他们 一律 唱 着 所谓 流行 歌曲 。 什么 叫 流行 歌曲 ？ 那 就是 被 很多 人 受 欢迎 的 歌曲 。

P2: 现在 电视 上 很多 明星 为了 当成 一 位 流行 歌手 奋斗 着 。 他们 一律 唱 着 所谓 流行 歌曲 。 什么 叫 流行 歌曲 ？ 那 就 是 被 很多 人 受 欢迎 的 歌曲 。

P2 local errors: 2

Local spans: over span `流行歌手` [15,19); over span `就是` [45,47)

##### sentence_id: 511

Source: 冲绳是一个非常美丽的地方，天蓝蓝的，海水清淤见地，鱼特别新鲜，水果尝尝鲜。腓力和我夜夜下班以后，去了翘首美丽的星空。

Target: 冲绳是一个非常美丽的地方，天蓝蓝的，海水清澈见底，鱼特别新鲜，水果也很新鲜。腓力和我每夜下班以后，都会去仰望美丽的星空。

Gold: 冲绳 是 一个 非常 美丽 的 地方 ， 天 蓝蓝的 ， 海水 清淤见地 ， 鱼 特别 新鲜 ， 水果 尝尝 鲜 。 腓力 和 我 夜夜 下班 以后 ， 去 了 翘首 美丽 的 星空 。

P2: 冲绳 是 一个 非常 美丽 的 地方 ， 天 蓝蓝的 ， 海水 清 淤 见 地 ， 鱼 特别 新鲜 ， 水果 尝尝鲜 。 腓力 和 我 夜夜 下班 以后 ， 去 了 翘首 美丽 的 星空 。

P2 local errors: 2

Local spans: over span `清淤见地` [20,24); under span `尝尝鲜` [33,36)

##### sentence_id: 992

Source: 我厌倦张华得很多。而且有一天，他使我惊奋。在白莱河的旁边我们走着，张华照样自吹自擂。忽然我们看见一只狗。它似乎淹死呢。张华马上弹跳河，救了它。

Target: 我厌倦张华。但是有一天，他使我震惊。我们走在白莱河的旁边，张华照样自吹自擂。忽然我们看见一只狗。它似乎快要淹死了。张华马上跳进河里，救了它。

Gold: 我 厌倦 张华 得 很 多 。 而且 有 一 天 ， 他 使 我 惊奋 。 在 白莱河 的 旁边 我们 走 着 ， 张华 照样 自吹自擂 。 忽然 我们 看见 一 只 狗 。 它 似乎 淹 死 呢 。 张华 马上 弹 跳 河 ， 救 了 它 。

P2: 我 厌倦 张华 得 很多 。 而且 有 一 天 ， 他 使 我 惊奋 。 在 白莱河 的 旁边 我们 走 着 ， 张华 照样 自吹自擂 。 忽然 我们 看见 一 只 狗 。 它 似乎 淹 死 呢 。 张华 马上 弹跳 河 ， 救 了 它 。

P2 local errors: 2

Local spans: under span `很多` [6,8); under span `弹跳` [63,65)

##### sentence_id: 415

Source: 从小的时候，妈妈独自养家我和我的哥哥。他一直鼓励我们做理想的工作。我告诉她我想成为口译的时候，她别笑了，她只告诉我：要是你要学习汉语和日语，就试一试。

Target: 从我小的时候，妈妈就独自抚养我和我哥哥。她一直鼓励我们做理想中的工作。当我告诉她我想成为口译员的时候，她笑了，她告诉我：“要是你想学习汉语和日语，就试一试。”

Gold: 从小 的 时候 ， 妈妈 独自 养家 我 和 我 的 哥哥 。 他 一直 鼓励 我们 做 理想 的 工作 。 我 告诉 她 我 想 成为 口译 的 时候 ， 她 别 笑 了 ， 她 只 告诉 我 ： 要是 你 要 学习 汉语 和 日语 ， 就 试 一 试 。

P2: 从 小 的 时候 ， 妈妈 独自 养 家 我 和 我 的 哥哥 。 他 一直 鼓励 我们 做 理想 的 工作 。 我 告诉 她 我 想 成为 口译 的 时候 ， 她 别 笑 了 ， 她 只 告诉 我 ： 要是 你 要 学习 汉语 和 日语 ， 就 试 一 试 。

P2 local errors: 2

Local spans: over span `从小` [0,2); over span `养家` [10,12)

##### sentence_id: 28

Source: 随着时代的潮流，流行歌曲对年轻的一代特别喜欢，甚至连歌星的名字都能刻在记忆上。每一首歌的曲子，谁唱的也顺口说出。这见得流行歌曲对现代的青年真是一种渴求的音乐。

Target: 随着时代的潮流，年轻的一代对流行歌曲特别喜欢，甚至连歌星的名字都能刻在记忆上。每一首歌的曲子，谁唱的也顺口说出。这足以见得流行歌曲对现代的青年来说真是一种渴求的音乐。

Gold: 随着 时代 的 潮流 ， 流行歌曲 对 年轻 的 一代 特别 喜欢 ， 甚至 连 歌星 的 名字 都 能 刻 在 记忆 上 。 每 一 首 歌 的 曲子 ， 谁 唱 的 也 顺口 说 出 。 这 见 得 流行歌曲 对 现代 的 青年 真是 一 种 渴求 的 音乐 。

P2: 随着 时代 的 潮流 ， 流行歌曲 对 年轻 的 一代 特别 喜欢 ， 甚至 连 歌星 的 名字 都 能 刻 在 记忆 上 。 每 一 首 歌 的 曲子 ， 谁 唱 的 也 顺口 说 出 。 这 见得 流行歌曲 对 现代 的 青年 真 是 一 种 渴求 的 音乐 。

P2 local errors: 2

Local spans: under span `见得` [57,59); over span `真是` [69,71)

##### sentence_id: 40

Source: 最近注意点吸烟的人越来越多了，大家都是这样的文化思想要求高等生活水平的。在公共场所规定再多严厉要的话，必须做为了青少年和所有人的健康，我希望一定好生活的改变的环境。

Target: 最近注意到吸烟的人越来越多了，大家都是有文化思想和高等生活水平的人。在公共场所制定更多严厉的规定是必须要做的。为了青少年和所有人的健康，我希望生活环境一定要被改善。

Gold: 最近 注意 点 吸烟 的 人 越来越 多 了 ， 大家 都 是 这样 的 文化 思想 要求 高等 生活 水平 的 。 在 公共场所 规定 再 多 严厉 要 的话 ， 必须 做 为了 青少年 和 所有 人 的 健康 ， 我 希望 一定 好 生活 的 改变 的 环境 。

P2: 最近 注意 点 吸烟 的 人 越来越 多 了 ， 大家 都 是 这样 的 文化 思想 要求 高等 生活 水平 的 。 在 公共场所 规定 再 多 严厉 要 的 话 ， 必须 做为了 青少年 和 所有 人 的 健康 ， 我 希望 一定 好 生活 的 改变 的 环境 。

P2 local errors: 2

Local spans: over span `的话` [48,50); under span `做为了` [53,56)

#### All sentence_ids

1086, 584, 46, 354, 178, 511, 992, 415, 28, 40, 375, 568, 428, 601, 167, 973, 818, 965

## P2 Fix Examples

## B B G / sentence_id: 254

Source: 上次考试我的了初级5。

Target: 上次考试我得了初级5。

Gold: 上次 考试 我 的了 初级 5 。

D: 上次 考试 我 的 了 初级 5 。

P1: 上次 考试 我 的 了 初级 5 。

P2: 上次 考试 我 的了 初级 5 。

Span: 的了

Explanation: D is over: 的了 -> 的 / 了. P1 is over: 的了 -> 的 / 了. P2 matches the gold token span.

## B G G / sentence_id: 74

Source: 这样的恶循环没完没了。

Target: 这样的恶性循环没完没了。

Gold: 这样 的 恶循环 没完没了 。

D: 这样 的 恶 循环 没完没了 。

P1: 这样 的 恶循环 没完没了 。

P2: 这样 的 恶循环 没完没了 。

Span: 恶循环

Explanation: D is over: 恶循环 -> 恶 / 循环. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 286

Source: 我本生喜欢听流行歌曲。

Target: 我本身喜欢听流行歌曲。

Gold: 我 本生 喜欢 听 流行歌曲 。

D: 我 本生 喜欢 听 流行 歌曲 。

P1: 我 本生 喜欢 听 流行歌曲 。

P2: 我 本生 喜欢 听 流行歌曲 。

Span: 流行歌曲

Explanation: D is over: 流行歌曲 -> 流行 / 歌曲. P1 matches the gold token span. P2 matches the gold token span.

## G B G / sentence_id: 666

Source: 我朋友现在在泰国陆游。

Target: 我朋友现在在泰国旅游。

Gold: 我 朋友 现在 在 泰国 陆游 。

D: 我 朋友 现在 在 泰国 陆游 。

P1: 我 朋友 现在 在 泰国 陆 游 。

P2: 我 朋友 现在 在 泰国 陆游 。

Span: 陆游

Explanation: D matches the gold token span. P1 is over: 陆游 -> 陆 / 游. P2 matches the gold token span.

## B B G / sentence_id: 242

Source: 至令我没看过那么美丽的风景。

Target: 至今我没看到过那么美丽的风景。

Gold: 至令 我 没 看 过 那么 美丽 的 风景 。

D: 至 令 我 没 看 过 那么 美丽 的 风景 。

P1: 至 令 我 没 看 过 那么 美丽 的 风景 。

P2: 至令 我 没 看 过 那么 美丽 的 风景 。

Span: 至令

Explanation: D is over: 至令 -> 至 / 令. P1 is over: 至令 -> 至 / 令. P2 matches the gold token span.

## B G G / sentence_id: 470

Source: 我的宿舍是一座十吾层的楼房。

Target: 我的宿舍是一座十层的楼房。

Gold: 我 的 宿舍 是 一 座 十吾 层 的 楼房 。

D: 我 的 宿舍 是 一 座 十 吾 层 的 楼房 。

P1: 我 的 宿舍 是 一 座 十吾 层 的 楼房 。

P2: 我 的 宿舍 是 一 座 十吾 层 的 楼房 。

Span: 十吾

Explanation: D is over: 十吾 -> 十 / 吾. P1 matches the gold token span. P2 matches the gold token span.

## G B G / sentence_id: 101

Source: 反正，爸爸，我真的很祝贺你的生日。

Target: 反正，爸爸，我真诚地祝贺你的生日。

Gold: 反正 ， 爸爸 ， 我 真的 很 祝贺 你 的 生日 。

D: 反正 ， 爸爸 ， 我 真的 很 祝贺 你 的 生日 。

P1: 反正 ， 爸爸 ， 我 真 的 很 祝贺 你 的 生日 。

P2: 反正 ， 爸爸 ， 我 真的 很 祝贺 你 的 生日 。

Span: 真的

Explanation: D matches the gold token span. P1 is over: 真的 -> 真 / 的. P2 matches the gold token span.

## B G G / sentence_id: 589

Source: 我们任何地方都容易看见这样的坏拉圾。

Target: 我们在任何地方都容易看见这样的坏垃圾。

Gold: 我们 任何 地方 都 容易 看见 这样 的 坏 拉圾 。

D: 我们 任何 地方 都 容易 看见 这样 的 坏拉圾 。

P1: 我们 任何 地方 都 容易 看见 这样 的 坏 拉圾 。

P2: 我们 任何 地方 都 容易 看见 这样 的 坏 拉圾 。

Span: 坏拉圾

Explanation: D is under: 坏 / 拉圾 -> 坏拉圾. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 873

Source: 现在我也喜欢根儿子和丈夫们一起旅行。

Target: 现在我也喜欢跟儿子和丈夫他们一起旅行。

Gold: 现在 我 也 喜欢 根 儿子 和 丈夫 们 一起 旅行 。

D: 现在 我 也 喜欢 根儿子 和 丈夫 们 一起 旅行 。

P1: 现在 我 也 喜欢 根 儿子 和 丈夫 们 一起 旅行 。

P2: 现在 我 也 喜欢 根 儿子 和 丈夫 们 一起 旅行 。

Span: 根儿子

Explanation: D is under: 根 / 儿子 -> 根儿子. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 45

Source: 我自眼看见了：为了孩了。父母什么都作。

Target: 我亲眼看见了：为了孩子，父母什么都做。

Gold: 我 自眼 看见 了 ： 为了 孩了 。 父母 什么 都 作 。

D: 我 自 眼 看见 了 ： 为了 孩 了 。 父母 什么 都 作 。

P1: 我 自眼 看见 了 ： 为了 孩 了 。 父母 什么 都 作 。

P2: 我 自眼 看见 了 ： 为了 孩 了 。 父母 什么 都 作 。

Span: 自眼

Explanation: D is over: 自眼 -> 自 / 眼. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 1015

Source: 旅行团会做单身团让男女慢慢沟通和认识。

Target: 旅行团会设立单身团来让陌生男女慢慢沟通和认识。

Gold: 旅行团 会 做 单身团 让 男女 慢慢 沟通 和 认识 。

D: 旅行团 会 做 单身 团 让 男女 慢慢 沟通 和 认识 。

P1: 旅行团 会 做 单身团 让 男女 慢慢 沟通 和 认识 。

P2: 旅行团 会 做 单身团 让 男女 慢慢 沟通 和 认识 。

Span: 单身团

Explanation: D is over: 单身团 -> 单身 / 团. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 1119

Source: 中医可以治疗问题的根子，不只战斗症状。

Target: 中医可以治疗问题的根本，不只是症状。

Gold: 中医 可以 治疗 问题 的 根子 ， 不 只 战斗 症状 。

D: 中医 可以 治疗 问题 的 根子 ， 不只 战斗 症状 。

P1: 中医 可以 治疗 问题 的 根子 ， 不 只 战斗 症状 。

P2: 中医 可以 治疗 问题 的 根子 ， 不 只 战斗 症状 。

Span: 不只

Explanation: D is under: 不 / 只 -> 不只. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 926

Source: 他们有很歌星迷。因为他们是对听众的偶像。

Target: 他们有很多歌迷。因为他们是听众的偶像。

Gold: 他们 有 很 歌星迷 。 因为 他们 是 对 听众 的 偶像 。

D: 他们 有 很 歌星 迷 。 因为 他们 是 对 听众 的 偶像 。

P1: 他们 有 很 歌星迷 。 因为 他们 是 对 听众 的 偶像 。

P2: 他们 有 很 歌星迷 。 因为 他们 是 对 听众 的 偶像 。

Span: 歌星迷

Explanation: D is over: 歌星迷 -> 歌星 / 迷. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 1049

Source: 我一前没住过五星级旅馆，所以我很惊奇了。

Target: 我以前没住过五星级旅馆，所以我很惊奇。

Gold: 我 一前 没 住 过 五星级 旅馆 ， 所以 我 很 惊奇 了 。

D: 我 一 前 没 住 过 五星级 旅馆 ， 所以 我 很 惊奇 了 。

P1: 我 一前 没 住 过 五星级 旅馆 ， 所以 我 很 惊奇 了 。

P2: 我 一前 没 住 过 五星级 旅馆 ， 所以 我 很 惊奇 了 。

Span: 一前

Explanation: D is over: 一前 -> 一 / 前. P1 matches the gold token span. P2 matches the gold token span.

## G B G / sentence_id: 1107

Source: 总得来说，对孩子的教育父母有第一责任的。

Target: 总的来说，对孩子的教育父母是有第一责任的。

Gold: 总得来说 ， 对 孩子 的 教育 父母 有 第一 责任 的 。

D: 总得来说 ， 对 孩子 的 教育 父母 有 第一 责任 的 。

P1: 总得 来说 ， 对 孩子 的 教育 父母 有 第一 责任 的 。

P2: 总得来说 ， 对 孩子 的 教育 父母 有 第一 责任 的 。

Span: 总得来说

Explanation: D matches the gold token span. P1 is over: 总得来说 -> 总得 / 来说. P2 matches the gold token span.

## B G G / sentence_id: 441

Source: 这种书，我们只能以略读，跳读的方法涉猎了。

Target: 对于这种书，我们只能以略读、跳读的方法涉猎了。

Gold: 这种 书 ， 我们 只能 以 略读 ， 跳 读 的 方法 涉猎 了 。

D: 这种 书 ， 我们 只能 以 略 读 ， 跳 读 的 方法 涉猎 了 。

P1: 这种 书 ， 我们 只能 以 略读 ， 跳 读 的 方法 涉猎 了 。

P2: 这种 书 ， 我们 只能 以 略读 ， 跳 读 的 方法 涉猎 了 。

Span: 略读

Explanation: D is over: 略读 -> 略 / 读. P1 matches the gold token span. P2 matches the gold token span.

## B B G / sentence_id: 209

Source: 所以，如果你要流利地谈外语话，你必该练习口语。

Target: 所以，如果你要流利地说外语，你必须练习口语。

Gold: 所以 ， 如果 你 要 流利 地 谈 外语 话 ， 你 必该 练习 口语 。

D: 所以 ， 如果 你 要 流利 地 谈 外语 话 ， 你 必 该 练习 口语 。

P1: 所以 ， 如果 你 要 流利 地 谈 外语话 ， 你 必 该 练习 口语 。

P2: 所以 ， 如果 你 要 流利 地 谈 外语话 ， 你 必该 练习 口语 。

Span: 必该

Explanation: D is over: 必该 -> 必 / 该. P1 is over: 必该 -> 必 / 该. P2 matches the gold token span.

## B G G / sentence_id: 219

Source: 她的男朋友是她的学生的哥哥，他通过妹妹而知知她。

Target: 她的男朋友是她的学生的哥哥，他通过妹妹而知道她。

Gold: 她 的 男朋友 是 她 的 学生 的 哥哥 ， 他 通过 妹妹 而 知知 她 。

D: 她 的 男朋友 是 她 的 学生 的 哥哥 ， 他 通过 妹妹 而 知 知 她 。

P1: 她 的 男朋友 是 她 的 学生 的 哥哥 ， 他 通过 妹妹 而 知知 她 。

P2: 她 的 男朋友 是 她 的 学生 的 哥哥 ， 他 通过 妹妹 而 知知 她 。

Span: 知知

Explanation: D is over: 知知 -> 知 / 知. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 202

Source: 如果贵公司肯聘请我，信相对你们来说是百利而无一弊的。

Target: 如果贵公司肯聘请我，我相信对你们来说是有百利而无一弊的。

Gold: 如果 贵 公司 肯 聘请 我 ， 信相 对 你们 来说 是 百 利而 无一弊 的 。

D: 如果 贵 公司 肯 聘请 我 ， 信 相对 你们 来说 是 百利而 无 一弊 的 。

P1: 如果 贵 公司 肯 聘请 我 ， 信相 对 你们 来说 是 百 利而 无一弊 的 。

P2: 如果 贵 公司 肯 聘请 我 ， 信相 对 你们 来说 是 百 利而 无一弊 的 。

Span: 信相对

Explanation: D is drift: 信相 / 对 -> 信 / 相对. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 202

Source: 如果贵公司肯聘请我，信相对你们来说是百利而无一弊的。

Target: 如果贵公司肯聘请我，我相信对你们来说是有百利而无一弊的。

Gold: 如果 贵 公司 肯 聘请 我 ， 信相 对 你们 来说 是 百 利而 无一弊 的 。

D: 如果 贵 公司 肯 聘请 我 ， 信 相对 你们 来说 是 百利而 无 一弊 的 。

P1: 如果 贵 公司 肯 聘请 我 ， 信相 对 你们 来说 是 百 利而 无一弊 的 。

P2: 如果 贵 公司 肯 聘请 我 ， 信相 对 你们 来说 是 百 利而 无一弊 的 。

Span: 百利而

Explanation: D is under: 百 / 利而 -> 百利而. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 202

Source: 如果贵公司肯聘请我，信相对你们来说是百利而无一弊的。

Target: 如果贵公司肯聘请我，我相信对你们来说是有百利而无一弊的。

Gold: 如果 贵 公司 肯 聘请 我 ， 信相 对 你们 来说 是 百 利而 无一弊 的 。

D: 如果 贵 公司 肯 聘请 我 ， 信 相对 你们 来说 是 百利而 无 一弊 的 。

P1: 如果 贵 公司 肯 聘请 我 ， 信相 对 你们 来说 是 百 利而 无一弊 的 。

P2: 如果 贵 公司 肯 聘请 我 ， 信相 对 你们 来说 是 百 利而 无一弊 的 。

Span: 无一弊

Explanation: D is over: 无一弊 -> 无 / 一弊. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 558

Source: 我父母以前都是动物员，所以对我来说父母就是体育老师。

Target: 我父母以前都是运动员，所以对我来说父母就是体育老师。

Gold: 我 父母 以前 都 是 动物员 ， 所以 对 我 来说 父母 就 是 体育 老师 。

D: 我 父母 以前 都 是 动物 员 ， 所以 对 我 来说 父母 就 是 体育 老师 。

P1: 我 父母 以前 都 是 动物员 ， 所以 对 我 来说 父母 就 是 体育 老师 。

P2: 我 父母 以前 都 是 动物员 ， 所以 对 我 来说 父母 就 是 体育 老师 。

Span: 动物员

Explanation: D is over: 动物员 -> 动物 / 员. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 606

Source: 我已经订票飞机票。久后，为了我的职业，我要常常旅行。

Target: 我已经订好飞机票。以后，因为我的职业，我要常常旅行。

Gold: 我 已经 订 票 飞机票 。 久后 ， 为了 我 的 职业 ， 我 要 常常 旅行 。

D: 我 已经 订 票 飞机票 。 久 后 ， 为了 我 的 职业 ， 我 要 常常 旅行 。

P1: 我 已经 订 票 飞机票 。 久后 ， 为了 我 的 职业 ， 我 要 常常 旅行 。

P2: 我 已经 订 票 飞机票 。 久后 ， 为了 我 的 职业 ， 我 要 常常 旅行 。

Span: 久后

Explanation: D is over: 久后 -> 久 / 后. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 880

Source: 在韩国的名星最近唱以前的歌曲，吸引了中长年人的注目。

Target: 韩国的明星最近唱以前的歌曲，吸引了中老年人的注意。

Gold: 在 韩国 的 名星 最近 唱 以前 的 歌曲 ， 吸引 了 中长年人 的 注目 。

D: 在 韩国 的 名星 最近 唱 以前 的 歌曲 ， 吸引 了 中长年 人 的 注目 。

P1: 在 韩国 的 名星 最近 唱 以前 的 歌曲 ， 吸引 了 中长年人 的 注目 。

P2: 在 韩国 的 名星 最近 唱 以前 的 歌曲 ， 吸引 了 中长年人 的 注目 。

Span: 中长年人

Explanation: D is over: 中长年人 -> 中长年 / 人. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 1067

Source: 如若贵公司能拨出时间给本人一个面试的机会，将不胜感激。

Target: 如若贵公司能拨出时间给本人一个面试的机会，我将不胜感激。

Gold: 如若 贵 公司 能 拨 出 时间 给 本人 一个 面试 的 机会 ， 将 不胜感激 。

D: 如若 贵公司 能 拨 出 时间 给 本人 一个 面试 的 机会 ， 将 不胜感激 。

P1: 如若 贵 公司 能 拨 出 时间 给 本人 一个 面试 的 机会 ， 将 不胜感激 。

P2: 如若 贵 公司 能 拨 出 时间 给 本人 一个 面试 的 机会 ， 将 不胜感激 。

Span: 贵公司

Explanation: D is under: 贵 / 公司 -> 贵公司. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 1038

Source: 如果碰到人的话就会受伤。但是大部分的人们没想过这样的情况。

Target: 如果碰到人的话人就会受伤。但是大部分的人没想过这样的情况。

Gold: 如果 碰到 人 的 话 就 会 受伤 。 但是 大部分 的 人们 没 想 过 这样 的 情况 。

D: 如果 碰到 人 的话 就 会 受伤 。 但是 大部分 的 人们 没 想 过 这样 的 情况 。

P1: 如果 碰到 人 的 话 就 会 受伤 。 但是 大部分 的 人们 没 想 过 这样 的 情况 。

P2: 如果 碰到 人 的 话 就 会 受伤 。 但是 大部分 的 人们 没 想 过 这样 的 情况 。

Span: 的话

Explanation: D is under: 的 / 话 -> 的话. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 314

Source: 再说愚公是很好的英雄，因为他非常聪明，他知想他的家继他的计划。

Target: 再说愚公是很好的英雄，因为他非常聪明，他知道他的家人会继续他的计划。

Gold: 再说 愚公 是 很 好 的 英雄 ， 因为 他 非常 聪明 ， 他 知想 他 的 家 继 他 的 计划 。

D: 再说 愚公 是 很 好 的 英雄 ， 因为 他 非常 聪明 ， 他 知 想 他 的 家 继 他 的 计划 。

P1: 再说 愚公 是 很 好 的 英雄 ， 因为 他 非常 聪明 ， 他 知想 他 的 家 继 他 的 计划 。

P2: 再说 愚公 是 很 好 的 英雄 ， 因为 他 非常 聪明 ， 他 知想 他 的 家 继 他 的 计划 。

Span: 知想

Explanation: D is over: 知想 -> 知 / 想. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 1074

Source: 正如众所皆知，结交的方式繁多，过程不一，当然内容更是多姿多彩。

Target: 众所皆知，结交的方式繁多，过程不一，当然内容更是多姿多彩。

Gold: 正 如 众 所 皆知 ， 结交 的 方式 繁多 ， 过程 不一 ， 当然 内容 更 是 多姿多彩 。

D: 正 如 众 所 皆 知 ， 结交 的 方式 繁多 ， 过程 不一 ， 当然 内容 更 是 多姿多彩 。

P1: 正 如 众 所 皆知 ， 结交 的 方式 繁多 ， 过程 不一 ， 当然 内容 更 是 多姿多彩 。

P2: 正 如 众 所 皆知 ， 结交 的 方式 繁多 ， 过程 不一 ， 当然 内容 更 是 多姿多彩 。

Span: 皆知

Explanation: D is over: 皆知 -> 皆 / 知. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 484

Source: 在这样环境之下，孩子的心目中打下“唯一全心全意能依靠”地深深的烙印。

Target: 在这样环境之下，孩子的心目中打下“唯一全心全意能依靠”的深深的烙印。

Gold: 在 这样 环境 之下 ， 孩子 的 心目 中 打下 “ 唯一 全心全意 能 依靠 ” 地 深深 的 烙印 。

D: 在 这样 环境 之下 ， 孩子 的 心目 中 打下 “ 唯一 全心全意 能 依靠 ” 地 深深的 烙印 。

P1: 在 这样 环境 之下 ， 孩子 的 心目 中 打下 “ 唯一 全心全意 能 依靠 ” 地 深深 的 烙印 。

P2: 在 这样 环境 之下 ， 孩子 的 心目 中 打下 “ 唯一 全心全意 能 依靠 ” 地 深深 的 烙印 。

Span: 深深的

Explanation: D is under: 深深 / 的 -> 深深的. P1 matches the gold token span. P2 matches the gold token span.

## B G G / sentence_id: 520

Source: 虽然我对流行歌曲有兴趣，但实际上跟不上学会，所以我不太喜欢流行歌曲。

Target: 虽然我对流行歌曲有兴趣，但实际上学不会，所以我不太喜欢流行歌曲。

Gold: 虽然 我 对 流行 歌曲 有 兴趣 ， 但 实际上 跟不上 学会 ， 所以 我 不 太 喜欢 流行歌曲 。

D: 虽然 我 对 流行歌曲 有 兴趣 ， 但 实际上 跟不上 学会 ， 所以 我 不 太 喜欢 流行歌曲 。

P1: 虽然 我 对 流行 歌曲 有 兴趣 ， 但 实际上 跟不上 学会 ， 所以 我 不 太 喜欢 流行歌曲 。

P2: 虽然 我 对 流行 歌曲 有 兴趣 ， 但 实际上 跟不上 学会 ， 所以 我 不 太 喜欢 流行歌曲 。

Span: 流行歌曲

Explanation: D is under: 流行 / 歌曲 -> 流行歌曲. P1 matches the gold token span. P2 matches the gold token span.

## Projection Failure / Limitation Examples

## G B B / sentence_id: 232

Source: 昨天下雨很多。

Target: 昨天下了很多雨。

Gold: 昨天 下雨 很 多 。

D: 昨天 下雨 很 多 。

P1: 昨天 下雨 很多 。

P2: 昨天 下雨 很多 。

Span: 很多

Explanation: D matches the gold token span. P1 is under: 很 / 多 -> 很多. P2 is under: 很 / 多 -> 很多.

## G B B / sentence_id: 578

Source: 而且它再不能作售品卖了。

Target: 而且它再也不能作为售品卖了。

Gold: 而且 它 再不能 作 售品 卖 了 。

D: 而且 它 再不能 作 售品 卖 了 。

P1: 而且 它 再 不 能 作 售品 卖 了 。

P2: 而且 它 再 不 能 作 售品 卖 了 。

Span: 再不能

Explanation: D matches the gold token span. P1 is over: 再不能 -> 再 / 不 / 能. P2 is over: 再不能 -> 再 / 不 / 能.

## G B B / sentence_id: 310

Source: 但以前听说过，早恋引起了不好事。

Target: 但以前听说过，早恋带来了不好的事。

Gold: 但 以前 听说 过 ， 早恋 引起 了 不好 事 。

D: 但 以前 听说 过 ， 早恋 引起 了 不好 事 。

P1: 但 以前 听说 过 ， 早恋 引起 了 不好事 。

P2: 但 以前 听说 过 ， 早恋 引起 了 不好事 。

Span: 不好事

Explanation: D matches the gold token span. P1 is under: 不好 / 事 -> 不好事. P2 is under: 不好 / 事 -> 不好事.

## G B B / sentence_id: 864

Source: 我有哥哥，不过我们里阿关系不好！

Target: 我有哥哥，不过我们关系不好！

Gold: 我 有 哥哥 ， 不过 我们 里 阿 关系 不好 ！

D: 我 有 哥哥 ， 不过 我们 里 阿 关系 不好 ！

P1: 我 有 哥哥 ， 不过 我们 里阿 关系 不好 ！

P2: 我 有 哥哥 ， 不过 我们 里阿 关系 不好 ！

Span: 里阿

Explanation: D matches the gold token span. P1 is under: 里 / 阿 -> 里阿. P2 is under: 里 / 阿 -> 里阿.

## G B B / sentence_id: 41

Source: 而每一代的年轻时代都有不同的音乐调。

Target: 而每一代的年轻时代都有不同的音乐曲调。

Gold: 而 每 一代 的 年轻 时代 都 有 不同 的 音乐 调 。

D: 而 每 一代 的 年轻 时代 都 有 不同 的 音乐 调 。

P1: 而 每 一代 的 年轻 时代 都 有 不同 的 音乐调 。

P2: 而 每 一代 的 年轻 时代 都 有 不同 的 音乐调 。

Span: 音乐调

Explanation: D matches the gold token span. P1 is under: 音乐 / 调 -> 音乐调. P2 is under: 音乐 / 调 -> 音乐调.

## G B B / sentence_id: 279

Source: 重要的是我们全家人类应该解决这个问题。

Target: 重要的是我们全家人应该解决这个问题。

Gold: 重要 的 是 我们 全家 人类 应该 解决 这个 问题 。

D: 重要 的 是 我们 全家 人类 应该 解决 这个 问题 。

P1: 重要 的 是 我们 全家人类 应该 解决 这个 问题 。

P2: 重要 的 是 我们 全家人类 应该 解决 这个 问题 。

Span: 全家人类

Explanation: D matches the gold token span. P1 is under: 全家 / 人类 -> 全家人类. P2 is under: 全家 / 人类 -> 全家人类.

## G G B / sentence_id: 92

Source: 再次，很好的恋爱可以向上年轻人的精神。

Target: 第二，良好的恋爱可以鼓舞年轻人的精神。

Gold: 再次 ， 很 好 的 恋爱 可以 向上 年轻人 的 精神 。

D: 再次 ， 很 好 的 恋爱 可以 向上 年轻人 的 精神 。

P1: 再次 ， 很 好 的 恋爱 可以 向上 年轻人 的 精神 。

P2: 再次 ， 很好 的 恋爱 可以 向上 年轻人 的 精神 。

Span: 很好

Explanation: D matches the gold token span. P1 matches the gold token span. P2 is under: 很 / 好 -> 很好.

## G G B / sentence_id: 741

Source: 自己也知道对身体有坏处，可能会得肺癌。

Target: 自己也知道对身体有坏处，可能诱发肺癌。

Gold: 自己 也 知道 对 身体 有 坏处 ， 可能 会 得 肺癌 。

D: 自己 也 知道 对 身体 有 坏处 ， 可能 会 得 肺癌 。

P1: 自己 也 知道 对 身体 有 坏处 ， 可能 会 得 肺癌 。

P2: 自己 也 知道 对 身体 有 坏处 ， 可能 会得 肺癌 。

Span: 会得

Explanation: D matches the gold token span. P1 matches the gold token span. P2 is under: 会 / 得 -> 会得.

## G B B / sentence_id: 68

Source: 这些歌曲，在一定程度上，给人予教育的作用。

Target: 这些歌曲，在一定程度上，给人以教育的作用。

Gold: 这些 歌曲 ， 在 一定 程度 上 ， 给 人 予 教育 的 作用 。

D: 这些 歌曲 ， 在 一定 程度 上 ， 给 人 予 教育 的 作用 。

P1: 这些 歌曲 ， 在 一定 程度 上 ， 给 人予 教育 的 作用 。

P2: 这些 歌曲 ， 在 一定 程度 上 ， 给 人予 教育 的 作用 。

Span: 人予

Explanation: D matches the gold token span. P1 is under: 人 / 予 -> 人予. P2 is under: 人 / 予 -> 人予.

## G B B / sentence_id: 106

Source: 还有想作为好老师的话，不能给孩子一个答案。

Target: 还有，想做好老师的话，不能只给孩子一个答案。

Gold: 还有 想 作为 好 老师 的 话 ， 不 能 给 孩子 一个 答案 。

D: 还有 想 作为 好 老师 的 话 ， 不 能 给 孩子 一个 答案 。

P1: 还有 想 作为 好 老师 的话 ， 不 能 给 孩子 一个 答案 。

P2: 还有 想 作为 好 老师 的话 ， 不 能 给 孩子 一个 答案 。

Span: 的话

Explanation: D matches the gold token span. P1 is under: 的 / 话 -> 的话. P2 is under: 的 / 话 -> 的话.

## G B B / sentence_id: 1125

Source: 女孩比男孩也早开始工作，但是她们的收人低。

Target: 虽然女孩比男孩早开始工作，但是她们的收入低。

Gold: 女孩 比 男孩 也 早 开始 工作 ， 但是 她们 的 收人 低 。

D: 女孩 比 男孩 也 早 开始 工作 ， 但是 她们 的 收人 低 。

P1: 女孩 比 男孩 也 早 开始 工作 ， 但是 她们 的 收 人 低 。

P2: 女孩 比 男孩 也 早 开始 工作 ， 但是 她们 的 收 人 低 。

Span: 收人

Explanation: D matches the gold token span. P1 is over: 收人 -> 收 / 人. P2 is over: 收人 -> 收 / 人.

## G B B / sentence_id: 530

Source: 所以人们唱流行歌曲可以表出自己的感情和思想。

Target: 所以人们唱流行歌曲可以表达出自己的感情和思想。

Gold: 所以 人们 唱 流行歌曲 可以 表 出 自己 的 感情 和 思想 。

D: 所以 人们 唱 流行歌曲 可以 表 出 自己 的 感情 和 思想 。

P1: 所以 人们 唱 流行歌曲 可以 表出 自己 的 感情 和 思想 。

P2: 所以 人们 唱 流行歌曲 可以 表出 自己 的 感情 和 思想 。

Span: 表出

Explanation: D matches the gold token span. P1 is under: 表 / 出 -> 表出. P2 is under: 表 / 出 -> 表出.

## G B B / sentence_id: 209

Source: 所以，如果你要流利地谈外语话，你必该练习口语。

Target: 所以，如果你要流利地说外语，你必须练习口语。

Gold: 所以 ， 如果 你 要 流利 地 谈 外语 话 ， 你 必该 练习 口语 。

D: 所以 ， 如果 你 要 流利 地 谈 外语 话 ， 你 必 该 练习 口语 。

P1: 所以 ， 如果 你 要 流利 地 谈 外语话 ， 你 必 该 练习 口语 。

P2: 所以 ， 如果 你 要 流利 地 谈 外语话 ， 你 必该 练习 口语 。

Span: 外语话

Explanation: D matches the gold token span. P1 is under: 外语 / 话 -> 外语话. P2 is under: 外语 / 话 -> 外语话.

## G B B / sentence_id: 932

Source: 至于生物質能可以全地球的电力的需求的二十倍满足。

Target: 至于生物质能可以满足全地球的电力的需求的二十倍。

Gold: 至于 生物質能 可以 全 地球 的 电力 的 需求 的 二十 倍 满足 。

D: 至于 生物質能 可以 全 地球 的 电力 的 需求 的 二十 倍 满足 。

P1: 至于 生物 質能 可以 全 地球 的 电力 的 需求 的 二十 倍 满足 。

P2: 至于 生物 質能 可以 全 地球 的 电力 的 需求 的 二十 倍 满足 。

Span: 生物質能

Explanation: D matches the gold token span. P1 is over: 生物質能 -> 生物 / 質能. P2 is over: 生物質能 -> 生物 / 質能.

## G B B / sentence_id: 226

Source: 如此来看，这岂不是解决不了问题，还制造了些问题吗？

Target: 如此看来，这岂不是解决不了问题，还制造了些问题吗？

Gold: 如此 来看 ， 这 岂 不 是 解决 不 了 问题 ， 还 制造 了 些 问题 吗 ？

D: 如此 来看 ， 这 岂 不 是 解决 不 了 问题 ， 还 制造 了 些 问题 吗 ？

P1: 如此 来 看 ， 这 岂 不 是 解决 不 了 问题 ， 还 制造 了 些 问题 吗 ？

P2: 如此 来 看 ， 这 岂 不 是 解决 不 了 问题 ， 还 制造 了 些 问题 吗 ？

Span: 来看

Explanation: D matches the gold token span. P1 is over: 来看 -> 来 / 看. P2 is over: 来看 -> 来 / 看.

## G B B / sentence_id: 257

Source: 第一天我只写了一个句子话：“今天，我开写汉语日记本。”

Target: 第一天我只写了一个句子：“今天，我开始写汉语日记本。”

Gold: 第一 天 我 只 写 了 一个 句子 话 ： “ 今天 ， 我 开 写 汉语 日记本 。 ”

D: 第一 天 我 只 写 了 一个 句子 话 ： “ 今天 ， 我 开 写 汉语 日记本 。 ”

P1: 第一 天 我 只 写 了 一个 句子 话 ： “ 今天 ， 我 开写 汉语 日记本 。 ”

P2: 第一 天 我 只 写 了 一个 句子 话 ： “ 今天 ， 我 开写 汉语 日记本 。 ”

Span: 开写

Explanation: D matches the gold token span. P1 is under: 开 / 写 -> 开写. P2 is under: 开 / 写 -> 开写.

## G B B / sentence_id: 455

Source: 第一个是如果她常常模着自己的前发，她想有距离自己从对方。

Target: 第一个是如果她常常摸着自己的前发，她想自己跟对方保持距离。

Gold: 第一 个 是 如果 她 常常 模 着 自己 的 前 发 ， 她 想 有 距离 自己 从 对方 。

D: 第一 个 是 如果 她 常常 模 着 自己 的 前 发 ， 她 想 有 距离 自己 从 对方 。

P1: 第一 个 是 如果 她 常常 模 着 自己 的 前发 ， 她 想 有 距离 自己 从 对方 。

P2: 第一 个 是 如果 她 常常 模 着 自己 的 前发 ， 她 想 有 距离 自己 从 对方 。

Span: 前发

Explanation: D matches the gold token span. P1 is under: 前 / 发 -> 前发. P2 is under: 前 / 发 -> 前发.

## G B B / sentence_id: 1058

Source: 我喜欢我的旅行，虽然太阳没照。天汽没要变，天空没蓝蓝的。

Target: 我喜欢我的旅行，虽然太阳没出来，天气没变，天空也不蓝。

Gold: 我 喜欢 我 的 旅行 ， 虽然 太阳 没 照 。 天汽 没 要 变 ， 天空 没 蓝蓝的 。

D: 我 喜欢 我 的 旅行 ， 虽然 太阳 没 照 。 天汽 没 要 变 ， 天空 没 蓝蓝的 。

P1: 我 喜欢 我 的 旅行 ， 虽然 太阳 没照 。 天汽 没 要 变 ， 天空 没 蓝蓝的 。

P2: 我 喜欢 我 的 旅行 ， 虽然 太阳 没照 。 天汽 没 要 变 ， 天空 没 蓝蓝的 。

Span: 没照

Explanation: D matches the gold token span. P1 is under: 没 / 照 -> 没照. P2 is under: 没 / 照 -> 没照.

## G B B / sentence_id: 432

Source: 那么谁给我们知识呢，大大概的情况下父母教我们最基本的东西。

Target: 那么谁给我们知识呢，大概率的情况下是父母教我们最基本的东西。

Gold: 那么 谁 给 我们 知识 呢 ， 大 大概 的 情况 下 父母 教 我们 最 基本 的 东西 。

D: 那么 谁 给 我们 知识 呢 ， 大 大概 的 情况 下 父母 教 我们 最 基本 的 东西 。

P1: 那么 谁 给 我们 知识 呢 ， 大大 概 的 情况 下 父母 教 我们 最 基本 的 东西 。

P2: 那么 谁 给 我们 知识 呢 ， 大大 概 的 情况 下 父母 教 我们 最 基本 的 东西 。

Span: 大大概

Explanation: D matches the gold token span. P1 is drift: 大 / 大概 -> 大大 / 概. P2 is drift: 大 / 大概 -> 大大 / 概.

## G B B / sentence_id: 459

Source: 她除其她事项外看着一个正在洗净衣服的、非常胖也非难看的老女人。

Target: 她除了要做其他事情，还要照看那个正在洗衣服的、非常胖也非常难看的老女人。

Gold: 她 除 其她 事项 外 看 着 一个 正在 洗 净 衣服 的 、 非常 胖 也 非 难看 的 老 女人 。

D: 她 除 其她 事项 外 看 着 一个 正在 洗 净 衣服 的 、 非常 胖 也 非 难看 的 老 女人 。

P1: 她 除 其 她 事项 外 看 着 一个 正在 洗 净 衣服 的 、 非常 胖 也 非 难看 的 老 女人 。

P2: 她 除 其 她 事项 外 看 着 一个 正在 洗 净 衣服 的 、 非常 胖 也 非 难看 的 老 女人 。

Span: 其她

Explanation: D matches the gold token span. P1 is over: 其她 -> 其 / 她. P2 is over: 其她 -> 其 / 她.

## G B B / sentence_id: 385

Source: 老板批评其他的经理，说他们画饼充饥，只清谈，不无实际，互相吹捧。

Target: 老板批评其他的经理，说他们画饼充饥，只空谈，不切实际，互相吹捧。

Gold: 老板 批评 其他 的 经理 ， 说 他们 画饼充饥 ， 只 清谈 ， 不无实际 ， 互相 吹捧 。

D: 老板 批评 其他 的 经理 ， 说 他们 画饼充饥 ， 只 清谈 ， 不无实际 ， 互相 吹捧 。

P1: 老板 批评 其他 的 经理 ， 说 他们 画饼充饥 ， 只 清 谈 ， 不无 实际 ， 互相 吹捧 。

P2: 老板 批评 其他 的 经理 ， 说 他们 画饼充饥 ， 只 清谈 ， 不无 实际 ， 互相 吹捧 。

Span: 不无实际

Explanation: D matches the gold token span. P1 is over: 不无实际 -> 不无 / 实际. P2 is over: 不无实际 -> 不无 / 实际.

## G B B / sentence_id: 960

Source: 智利还有另一个问题：共公汽车少，火车也少。所以一般人都会会开车。

Target: 智利还有另一个问题：公共汽车少，火车也少。所以一般人都会开车。

Gold: 智利 还有 另 一个 问题 ： 共公 汽车 少 ， 火车 也 少 。 所以 一般 人 都 会 会 开车 。

D: 智利 还有 另 一个 问题 ： 共公 汽车 少 ， 火车 也 少 。 所以 一般 人 都 会 会 开车 。

P1: 智利 还有 另 一个 问题 ： 共公汽车 少 ， 火车 也 少 。 所以 一般 人 都 会 会 开车 。

P2: 智利 还有 另 一个 问题 ： 共公汽车 少 ， 火车 也 少 。 所以 一般 人 都 会 会 开车 。

Span: 共公汽车

Explanation: D matches the gold token span. P1 is under: 共公 / 汽车 -> 共公汽车. P2 is under: 共公 / 汽车 -> 共公汽车.

## G B B / sentence_id: 22

Source: 所以我从小到现在在这些快餐吃饭的机会很少。对我来说每次饭都很重要。

Target: 所以我从小到现在在这些快餐店吃饭的机会很少。对我来说每顿饭都很重要。

Gold: 所以 我 从小 到 现在 在 这些 快餐 吃饭 的 机会 很 少 。 对 我 来说 每 次 饭 都 很 重要 。

D: 所以 我 从小 到 现在 在 这些 快餐 吃饭 的 机会 很 少 。 对 我 来说 每 次 饭 都 很 重要 。

P1: 所以 我 从小 到 现在 在 这些 快餐 吃饭 的 机会 很 少 。 对 我 来说 每次 饭 都 很 重要 。

P2: 所以 我 从小 到 现在 在 这些 快餐 吃饭 的 机会 很 少 。 对 我 来说 每次 饭 都 很 重要 。

Span: 每次

Explanation: D matches the gold token span. P1 is under: 每 / 次 -> 每次. P2 is under: 每 / 次 -> 每次.

## G B B / sentence_id: 1086

Source: 在公共场所来老弱男女。在公共场所吸抽就意味着，不抽烟者都被吸呼烟。

Target: 在公共场所有男女老幼，所以在公共场所抽烟就意味着这些不抽烟者都得被迫吸烟。

Gold: 在 公共场所 来 老弱男女 。 在 公共场所 吸抽 就 意味着 ， 不抽烟者 都 被 吸 呼 烟 。

D: 在 公共场所 来 老 弱 男女 。 在 公共场所 吸抽 就 意味着 ， 不抽烟者 都 被 吸 呼 烟 。

P1: 在 公共场所 来 老 弱 男女 。 在 公共场所 吸 抽 就 意味着 ， 不抽烟者 都 被 吸呼烟 。

P2: 在 公共场所 来 老 弱 男女 。 在 公共场所 吸 抽 就 意味着 ， 不抽烟者 都 被 吸呼烟 。

Span: 吸抽

Explanation: D matches the gold token span. P1 is over: 吸抽 -> 吸 / 抽. P2 is over: 吸抽 -> 吸 / 抽.

## G B B / sentence_id: 1086

Source: 在公共场所来老弱男女。在公共场所吸抽就意味着，不抽烟者都被吸呼烟。

Target: 在公共场所有男女老幼，所以在公共场所抽烟就意味着这些不抽烟者都得被迫吸烟。

Gold: 在 公共场所 来 老弱男女 。 在 公共场所 吸抽 就 意味着 ， 不抽烟者 都 被 吸 呼 烟 。

D: 在 公共场所 来 老 弱 男女 。 在 公共场所 吸抽 就 意味着 ， 不抽烟者 都 被 吸 呼 烟 。

P1: 在 公共场所 来 老 弱 男女 。 在 公共场所 吸 抽 就 意味着 ， 不抽烟者 都 被 吸呼烟 。

P2: 在 公共场所 来 老 弱 男女 。 在 公共场所 吸 抽 就 意味着 ， 不抽烟者 都 被 吸呼烟 。

Span: 吸呼烟

Explanation: D matches the gold token span. P1 is under: 吸 / 呼 / 烟 -> 吸呼烟. P2 is under: 吸 / 呼 / 烟 -> 吸呼烟.

## G G B / sentence_id: 781

Source: 电子游戏让人变成孤僻、失去自己的质感、破坏自己的智力，失去好奇性。

Target: 电子游戏让人变得孤僻、失去自己的自制力、破坏自己的智力、失去好奇心。

Gold: 电子游戏 让 人 变成 孤僻 、 失去 自己 的 质感 、 破坏 自己 的 智力 ， 失去 好奇性 。

D: 电子游戏 让 人 变成 孤僻 、 失去 自己 的 质感 、 破坏 自己 的 智力 ， 失去 好奇性 。

P1: 电子游戏 让 人 变成 孤僻 、 失去 自己 的 质感 、 破坏 自己 的 智力 ， 失去 好奇性 。

P2: 电子游戏 让 人 变 成 孤僻 、 失去 自己 的 质感 、 破坏 自己 的 智力 ， 失去 好奇性 。

Span: 变成

Explanation: D matches the gold token span. P1 matches the gold token span. P2 is over: 变成 -> 变 / 成.

## G B B / sentence_id: 222

Source: 我是学士。因此我还没有职业。但是，我想一定因该学习。好工作要好学历。

Target: 我是学生，因此我还没有工作。但是，我想一定要好好学习，因为好工作需要好学历。

Gold: 我 是 学士 。 因此 我 还 没有 职业 。 但是 ， 我 想 一定 因该 学习 。 好 工作 要 好 学历 。

D: 我 是 学士 。 因此 我 还 没有 职业 。 但是 ， 我 想 一定 因该 学习 。 好 工作 要 好 学历 。

P1: 我 是 学士 。 因此 我 还 没有 职业 。 但是 ， 我 想 一定 因 该 学习 。 好 工作 要 好 学历 。

P2: 我 是 学士 。 因此 我 还 没有 职业 。 但是 ， 我 想 一定 因 该 学习 。 好 工作 要 好 学历 。

Span: 因该

Explanation: D matches the gold token span. P1 is over: 因该 -> 因 / 该. P2 is over: 因该 -> 因 / 该.

## G B B / sentence_id: 75

Source: 要是他们的感情能经历数十多年的时间，那一定也能再渡过多几十年的时间海。

Target: 要是他们的感情能经历数十年的时间，那一定也能再渡过几十年的时间。

Gold: 要是 他们 的 感情 能 经历 数十 多 年 的 时间 ， 那 一定 也 能 再 渡过 多 几十 年 的 时间 海 。

D: 要是 他们 的 感情 能 经历 数十 多 年 的 时间 ， 那 一定 也 能 再 渡过 多 几十 年 的 时间 海 。

P1: 要是 他们 的 感情 能 经历 数十 多 年 的 时间 ， 那 一定 也 能 再 渡过 多 几十 年 的 时间海 。

P2: 要是 他们 的 感情 能 经历 数十 多 年 的 时间 ， 那 一定 也 能 再 渡过 多 几十 年 的 时间海 。

Span: 时间海

Explanation: D matches the gold token span. P1 is under: 时间 / 海 -> 时间海. P2 is under: 时间 / 海 -> 时间海.

## G G B / sentence_id: 361

Source: 过了几年，他真的变成大富大贵。有一天他的妻子看见他，现在很想跟他再复合。

Target: 过了几年，他真的变得大富大贵。有一天他的前妻看见他，很想跟他再复合。

Gold: 过 了 几 年 ， 他 真 的 变成 大富大贵 。 有 一 天 他 的 妻子 看见 他 ， 现在 很 想 跟 他 再 复合 。

D: 过 了 几 年 ， 他 真 的 变成 大富大贵 。 有 一 天 他 的 妻子 看见 他 ， 现在 很 想 跟 他 再 复合 。

P1: 过 了 几 年 ， 他 真 的 变成 大富大贵 。 有 一 天 他 的 妻子 看见 他 ， 现在 很 想 跟 他 再 复合 。

P2: 过 了 几 年 ， 他 真 的 变 成 大富大贵 。 有 一 天 他 的 妻子 看见 他 ， 现在 很 想 跟 他 再 复合 。

Span: 变成

Explanation: D matches the gold token span. P1 matches the gold token span. P2 is over: 变成 -> 变 / 成.

## G B B / sentence_id: 931

Source: 很小的时候觉]得自己的父母是个完美的人，什么都知道，他们做的东西时总是对的。

Target: 很小的时候觉得自己的父母是个完美的人，什么都知道，他们做的事情总是对的。

Gold: 很 小 的 时候 觉 ] 得 自己 的 父母 是 个 完美 的 人 ， 什么 都 知道 ， 他们 做 的 东西 时 总 是 对 的 。

D: 很 小 的 时候 觉 ] 得 自己 的 父母 是 个 完美 的 人 ， 什么 都 知道 ， 他们 做 的 东西 时 总是 对 的 。

P1: 很 小 的 时候 觉 ]得 自己 的 父母 是 个 完美 的 人 ， 什么 都 知道 ， 他们 做 的 东西 时 总 是 对 的 。

P2: 很 小 的 时候 觉 ]得 自己 的 父母 是 个 完美 的 人 ， 什么 都 知道 ， 他们 做 的 东西 时 总 是 对 的 。

Span: ]得

Explanation: D matches the gold token span. P1 is under: ] / 得 -> ]得. P2 is under: ] / 得 -> ]得.

## Gold Annotation Check Examples

## B B B / sentence_id: 631

Source: 所以我少就不理他了。

Target: 所以我就不理他了。

Gold: 所以 我 少就 不 理 他 了 。

D: 所以 我 少 就 不 理 他 了 。

P1: 所以 我 少 就 不 理 他 了 。

P2: 所以 我 少 就 不 理 他 了 。

Span: 少就

Explanation: D is over: 少就 -> 少 / 就. P1 is over: 少就 -> 少 / 就. P2 is over: 少就 -> 少 / 就.

## B B B / sentence_id: 460

Source: 对不起，我没看你的新写字。

Target: 对不起，我没看你新写的字。

Gold: 对不起 ， 我 没 看 你 的 新 写 字 。

D: 对不起 ， 我 没 看 你 的 新 写字 。

P1: 对不起 ， 我 没 看 你 的 新 写字 。

P2: 对不起 ， 我 没 看 你 的 新 写字 。

Span: 写字

Explanation: D is under: 写 / 字 -> 写字. P1 is under: 写 / 字 -> 写字. P2 is under: 写 / 字 -> 写字.

## B B B / sentence_id: 160

Source: 但是人们只能看农药的不好处。

Target: 但是人们只能看到农药的不好之处。

Gold: 但是 人们 只能 看 农药 的 不好 处 。

D: 但是 人们 只能 看 农药 的 不好处 。

P1: 但是 人们 只能 看 农药 的 不好处 。

P2: 但是 人们 只能 看 农药 的 不好处 。

Span: 不好处

Explanation: D is under: 不好 / 处 -> 不好处. P1 is under: 不好 / 处 -> 不好处. P2 is under: 不好 / 处 -> 不好处.

## B B B / sentence_id: 1137

Source: 孩子也是有固有性个的一个人。

Target: 孩子也是有固有个性的一个人。

Gold: 孩子 也 是 有 固有 性个 的 一个 人 。

D: 孩子 也 是 有 固有性个 的 一个 人 。

P1: 孩子 也 是 有 固有性 个 的 一个 人 。

P2: 孩子 也 是 有 固有性 个 的 一个 人 。

Span: 固有性个

Explanation: D is under: 固有 / 性个 -> 固有性个. P1 is drift: 固有 / 性个 -> 固有性 / 个. P2 is drift: 固有 / 性个 -> 固有性 / 个.

## B B B / sentence_id: 903

Source: 可是我不是都喜欢什么流行歌曲。

Target: 可是我不全是喜欢流行歌曲。

Gold: 可是 我 不 是 都 喜欢 什么 流行 歌曲 。

D: 可是 我 不 是 都 喜欢 什么 流行歌曲 。

P1: 可是 我 不 是 都 喜欢 什么 流行歌曲 。

P2: 可是 我 不 是 都 喜欢 什么 流行歌曲 。

Span: 流行歌曲

Explanation: D is under: 流行 / 歌曲 -> 流行歌曲. P1 is under: 流行 / 歌曲 -> 流行歌曲. P2 is under: 流行 / 歌曲 -> 流行歌曲.

## B B B / sentence_id: 45

Source: 我自眼看见了：为了孩了。父母什么都作。

Target: 我亲眼看见了：为了孩子，父母什么都做。

Gold: 我 自眼 看见 了 ： 为了 孩了 。 父母 什么 都 作 。

D: 我 自 眼 看见 了 ： 为了 孩 了 。 父母 什么 都 作 。

P1: 我 自眼 看见 了 ： 为了 孩 了 。 父母 什么 都 作 。

P2: 我 自眼 看见 了 ： 为了 孩 了 。 父母 什么 都 作 。

Span: 孩了

Explanation: D is over: 孩了 -> 孩 / 了. P1 is over: 孩了 -> 孩 / 了. P2 is over: 孩了 -> 孩 / 了.

## B B B / sentence_id: 736

Source: 就是说，这里，各课有tutorial。

Target: 就是说，这里各科都有tutorial。

Gold: 就是说 ， 这里 ， 各课 有 tutorial 。

D: 就是说 ， 这里 ， 各 课 有 tutorial 。

P1: 就是说 ， 这里 ， 各 课 有 tutorial 。

P2: 就是说 ， 这里 ， 各 课 有 tutorial 。

Span: 各课

Explanation: D is over: 各课 -> 各 / 课. P1 is over: 各课 -> 各 / 课. P2 is over: 各课 -> 各 / 课.

## B B B / sentence_id: 1035

Source: 日本有这谚话“没有父母也孩子能成大”。

Target: 日本有句谚语：“没有父母的孩子也能长大。”

Gold: 日本 有 这 谚话 “ 没有 父母 也 孩子 能 成大 ” 。

D: 日本 有 这 谚话 “ 没有 父母 也 孩子 能 成 大 ” 。

P1: 日本 有 这 谚话 “ 没有 父母 也 孩子 能 成 大 ” 。

P2: 日本 有 这 谚话 “ 没有 父母 也 孩子 能 成 大 ” 。

Span: 成大

Explanation: D is over: 成大 -> 成 / 大. P1 is over: 成大 -> 成 / 大. P2 is over: 成大 -> 成 / 大.

## B B B / sentence_id: 72

Source: 一听说贵公司正在征聘导游，本人便有意思想加入。

Target: 一听说贵公司正在征聘导游，本人便有意愿加入。

Gold: 一 听说 贵公司 正在 征聘 导游 ， 本人 便 有 意思 想 加入 。

D: 一 听说 贵公司 正在 征聘 导游 ， 本人 便 有意思 想 加入 。

P1: 一 听说 贵公司 正在 征聘 导游 ， 本人 便 有 意思想 加入 。

P2: 一 听说 贵公司 正在 征聘 导游 ， 本人 便 有 意思想 加入 。

Span: 有意思

Explanation: D is under: 有 / 意思 -> 有意思. P1 is drift: 有 / 意思 -> 有. P2 is drift: 有 / 意思 -> 有.

## B B B / sentence_id: 72

Source: 一听说贵公司正在征聘导游，本人便有意思想加入。

Target: 一听说贵公司正在征聘导游，本人便有意愿加入。

Gold: 一 听说 贵公司 正在 征聘 导游 ， 本人 便 有 意思 想 加入 。

D: 一 听说 贵公司 正在 征聘 导游 ， 本人 便 有意思 想 加入 。

P1: 一 听说 贵公司 正在 征聘 导游 ， 本人 便 有 意思想 加入 。

P2: 一 听说 贵公司 正在 征聘 导游 ， 本人 便 有 意思想 加入 。

Span: 意思想

Explanation: D is under: 意思 / 想 -> 想. P1 is under: 意思 / 想 -> 意思想. P2 is under: 意思 / 想 -> 意思想.

## B B B / sentence_id: 1008

Source: 不过一分二为来看，地球上很多人还是因饥饿而痛苦。

Target: 不过一分为二来看，地球上很多人还是因饥饿而痛苦。

Gold: 不过 一分二为 来 看 ， 地球 上 很多 人 还是 因 饥饿 而 痛苦 。

D: 不过 一 分 二 为 来 看 ， 地球 上 很多 人 还是 因 饥饿 而 痛苦 。

P1: 不过 一分二 为 来 看 ， 地球 上 很多 人 还是 因 饥饿 而 痛苦 。

P2: 不过 一分二 为 来 看 ， 地球 上 很多 人 还是 因 饥饿 而 痛苦 。

Span: 一分二为

Explanation: D is over: 一分二为 -> 一 / 分 / 二 / 为. P1 is over: 一分二为 -> 一分二 / 为. P2 is over: 一分二为 -> 一分二 / 为.

## B B B / sentence_id: 109

Source: 父母的一举一动，品格、人格态度足而影响他们的孩子。

Target: 父母的一举一动、品格和人格态度足以影响他们的孩子一生。

Gold: 父母 的 一举一动 ， 品格 、 人格 态度 足而 影响 他们 的 孩子 。

D: 父母 的 一举一动 ， 品格 、 人格 态度 足 而 影响 他们 的 孩子 。

P1: 父母 的 一举一动 ， 品格 、 人格 态度 足 而 影响 他们 的 孩子 。

P2: 父母 的 一举一动 ， 品格 、 人格 态度 足 而 影响 他们 的 孩子 。

Span: 足而

Explanation: D is over: 足而 -> 足 / 而. P1 is over: 足而 -> 足 / 而. P2 is over: 足而 -> 足 / 而.

## B B B / sentence_id: 586

Source: 我进来了。他们让我坐在椅了上然后开始了问我很多问题。

Target: 我进来了。他们让我坐在椅子上然后开始问我很多问题。

Gold: 我 进来 了 。 他们 让 我 坐 在 椅了 上 然后 开始 了 问 我 很多 问题 。

D: 我 进来 了 。 他们 让 我 坐 在 椅 了 上 然后 开始 了 问 我 很多 问题 。

P1: 我 进来 了 。 他们 让 我 坐 在 椅 了 上 然后 开始 了 问 我 很多 问题 。

P2: 我 进来 了 。 他们 让 我 坐 在 椅 了 上 然后 开始 了 问 我 很多 问题 。

Span: 椅了

Explanation: D is over: 椅了 -> 椅 / 了. P1 is over: 椅了 -> 椅 / 了. P2 is over: 椅了 -> 椅 / 了.

## B B B / sentence_id: 882

Source: 做生意的人一定要改变，才能像已前的歌曲一样有感情的。

Target: 做生意的人一定要改变，才能像以前的歌曲一样有感情。

Gold: 做 生意 的 人 一定 要 改变 ， 才 能 像 已前 的 歌曲 一样 有 感情 的 。

D: 做 生意 的 人 一定 要 改变 ， 才 能 像 已 前 的 歌曲 一样 有 感情 的 。

P1: 做 生意 的 人 一定 要 改变 ， 才 能 像 已 前 的 歌曲 一样 有 感情 的 。

P2: 做 生意 的 人 一定 要 改变 ， 才 能 像 已 前 的 歌曲 一样 有 感情 的 。

Span: 已前

Explanation: D is over: 已前 -> 已 / 前. P1 is over: 已前 -> 已 / 前. P2 is over: 已前 -> 已 / 前.

## B B B / sentence_id: 858

Source: 虽然它能切少抽烟者的一些自由，但是还能保护人民的健康。

Target: 虽然它限制了抽烟者的一些自由，但是它能保护人民的健康。

Gold: 虽然 它 能 切少 抽烟者 的 一些 自由 ， 但是 还 能 保护 人民 的 健康 。

D: 虽然 它 能 切 少 抽烟者 的 一些 自由 ， 但是 还 能 保护 人民 的 健康 。

P1: 虽然 它 能 切 少 抽烟者 的 一些 自由 ， 但是 还 能 保护 人民 的 健康 。

P2: 虽然 它 能 切 少 抽烟者 的 一些 自由 ， 但是 还 能 保护 人民 的 健康 。

Span: 切少

Explanation: D is over: 切少 -> 切 / 少. P1 is over: 切少 -> 切 / 少. P2 is over: 切少 -> 切 / 少.

## B B B / sentence_id: 418

Source: 因为流动歌曲很容易学会，而且歌曲里面可以看到我们的生活。

Target: 因为流行歌曲很容易学会，而且从歌曲里面可以看到我们的生活。

Gold: 因为 流动歌曲 很 容易 学会 ， 而且 歌曲 里面 可以 看到 我们 的 生活 。

D: 因为 流动 歌曲 很 容易 学会 ， 而且 歌曲 里面 可以 看到 我们 的 生活 。

P1: 因为 流动 歌曲 很 容易 学会 ， 而且 歌曲 里面 可以 看到 我们 的 生活 。

P2: 因为 流动 歌曲 很 容易 学会 ， 而且 歌曲 里面 可以 看到 我们 的 生活 。

Span: 流动歌曲

Explanation: D is over: 流动歌曲 -> 流动 / 歌曲. P1 is over: 流动歌曲 -> 流动 / 歌曲. P2 is over: 流动歌曲 -> 流动 / 歌曲.

## B B B / sentence_id: 137

Source: 抱着自足自己的情况，像耕农田似的，人们默默地培养自己的人生。

Target: 抱着自给自足的心态，像耕农田似的，人们默默地耕耘自己的人生。

Gold: 抱 着 自足自己 的 情况 ， 像 耕 农田 似的 ， 人们 默默 地 培养 自己 的 人生 。

D: 抱 着 自 足 自己 的 情况 ， 像 耕 农田 似的 ， 人们 默默 地 培养 自己 的 人生 。

P1: 抱 着 自足 自己 的 情况 ， 像 耕 农田 似的 ， 人们 默默 地 培养 自己 的 人生 。

P2: 抱 着 自足 自己 的 情况 ， 像 耕 农田 似的 ， 人们 默默 地 培养 自己 的 人生 。

Span: 自足自己

Explanation: D is over: 自足自己 -> 自 / 足 / 自己. P1 is over: 自足自己 -> 自足 / 自己. P2 is over: 自足自己 -> 自足 / 自己.

## B B B / sentence_id: 306

Source: 一个塑料瓶，你随便它的时候，有可能要等几下年，它才会自然地灭掉。

Target: 一个塑料瓶，你随便扔它的时候，有可能要等好几年，它才会自然地毁灭掉。

Gold: 一个 塑料瓶 ， 你 随便 它 的 时候 ， 有 可能 要 等 几下 年 ， 它 才 会 自然 地 灭 掉 。

D: 一个 塑料瓶 ， 你 随便 它 的 时候 ， 有 可能 要 等 几 下 年 ， 它 才 会 自然 地 灭 掉 。

P1: 一个 塑料瓶 ， 你 随便 它 的 时候 ， 有 可能 要 等 几 下 年 ， 它 才 会 自然 地 灭 掉 。

P2: 一个 塑料瓶 ， 你 随便 它 的 时候 ， 有 可能 要 等 几 下 年 ， 它 才 会 自然 地 灭 掉 。

Span: 几下

Explanation: D is over: 几下 -> 几 / 下. P1 is over: 几下 -> 几 / 下. P2 is over: 几下 -> 几 / 下.

## B B B / sentence_id: 172

Source: 不是请假，而且不上课、不上班、没有学习、没有工作那样的人是一种病。

Target: 不只请假，而且不上课、不上班、不学习、没有工作那样的人是一种病。

Gold: 不是 请假 ， 而且 不 上课 、 不 上班 、 没有 学习 、 没有 工作 那样 的 人 是 一 种 病 。

D: 不 是 请假 ， 而且 不 上课 、 不 上班 、 没有 学习 、 没有 工作 那样 的 人 是 一 种 病 。

P1: 不 是 请假 ， 而且 不 上课 、 不 上班 、 没有 学习 、 没有 工作 那样 的 人 是 一 种 病 。

P2: 不 是 请假 ， 而且 不 上课 、 不 上班 、 没有 学习 、 没有 工作 那样 的 人 是 一 种 病 。

Span: 不是

Explanation: D is over: 不是 -> 不 / 是. P1 is over: 不是 -> 不 / 是. P2 is over: 不是 -> 不 / 是.

## B B B / sentence_id: 1016

Source: 我喜欢汉吾果！我在大学，有上三课。下午我在大学点课。星期三我很忙。

Target: 我喜欢汉语课！我在大学，上午有三节课。下午我在大学上课。星期三我很忙。

Gold: 我 喜欢 汉吾果 ！ 我 在 大学 ， 有 上 三 课 。 下午 我 在 大学 点课 。 星期三 我 很 忙 。

D: 我 喜欢 汉吾果 ！ 我 在 大学 ， 有 上 三 课 。 下午 我 在 大学 点 课 。 星期三 我 很 忙 。

P1: 我 喜欢 汉吾果 ！ 我 在 大学 ， 有 上 三 课 。 下午 我 在 大学 点 课 。 星期三 我 很 忙 。

P2: 我 喜欢 汉吾果 ！ 我 在 大学 ， 有 上 三 课 。 下午 我 在 大学 点 课 。 星期三 我 很 忙 。

Span: 点课

Explanation: D is over: 点课 -> 点 / 课. P1 is over: 点课 -> 点 / 课. P2 is over: 点课 -> 点 / 课.

## B B B / sentence_id: 1086

Source: 在公共场所来老弱男女。在公共场所吸抽就意味着，不抽烟者都被吸呼烟。

Target: 在公共场所有男女老幼，所以在公共场所抽烟就意味着这些不抽烟者都得被迫吸烟。

Gold: 在 公共场所 来 老弱男女 。 在 公共场所 吸抽 就 意味着 ， 不抽烟者 都 被 吸 呼 烟 。

D: 在 公共场所 来 老 弱 男女 。 在 公共场所 吸抽 就 意味着 ， 不抽烟者 都 被 吸 呼 烟 。

P1: 在 公共场所 来 老 弱 男女 。 在 公共场所 吸 抽 就 意味着 ， 不抽烟者 都 被 吸呼烟 。

P2: 在 公共场所 来 老 弱 男女 。 在 公共场所 吸 抽 就 意味着 ， 不抽烟者 都 被 吸呼烟 。

Span: 老弱男女

Explanation: D is over: 老弱男女 -> 老 / 弱 / 男女. P1 is over: 老弱男女 -> 老 / 弱 / 男女. P2 is over: 老弱男女 -> 老 / 弱 / 男女.

## B B B / sentence_id: 584

Source: 目前在我国的流行歌曲越多越发展。差不多每个星期一两次举行流行歌曲会。

Target: 目前我国的流行歌曲发展的越来越多，差不多每个星期举行一两次流行歌曲会。

Gold: 目前 在 我国 的 流行歌曲 越多越 发展 。 差不多 每个 星期 一两 次 举行 流行歌曲 会 。

D: 目前 在 我国 的 流行 歌曲 越 多 越 发展 。 差不多 每个 星期一 两 次 举行 流行歌曲会 。

P1: 目前 在 我国 的 流行歌曲 越 多 越 发展 。 差不多 每个 星期一两 次 举行 流行歌曲 会 。

P2: 目前 在 我国 的 流行歌曲 越 多 越 发展 。 差不多 每个 星期一两 次 举行 流行歌曲 会 。

Span: 越多越

Explanation: D is over: 越多越 -> 越 / 多 / 越. P1 is over: 越多越 -> 越 / 多 / 越. P2 is over: 越多越 -> 越 / 多 / 越.

## B B B / sentence_id: 584

Source: 目前在我国的流行歌曲越多越发展。差不多每个星期一两次举行流行歌曲会。

Target: 目前我国的流行歌曲发展的越来越多，差不多每个星期举行一两次流行歌曲会。

Gold: 目前 在 我国 的 流行歌曲 越多越 发展 。 差不多 每个 星期 一两 次 举行 流行歌曲 会 。

D: 目前 在 我国 的 流行 歌曲 越 多 越 发展 。 差不多 每个 星期一 两 次 举行 流行歌曲会 。

P1: 目前 在 我国 的 流行歌曲 越 多 越 发展 。 差不多 每个 星期一两 次 举行 流行歌曲 会 。

P2: 目前 在 我国 的 流行歌曲 越 多 越 发展 。 差不多 每个 星期一两 次 举行 流行歌曲 会 。

Span: 星期一两

Explanation: D is drift: 星期 / 一两 -> 星期一 / 两. P1 is under: 星期 / 一两 -> 星期一两. P2 is under: 星期 / 一两 -> 星期一两.

## B B B / sentence_id: 612

Source: 最近，一些音乐评论家发表轻视流星歌曲的一些观点，有些人以致蔑视流行歌曲。

Target: 最近，一些音乐评论家发表轻视流行歌曲的一些观点，以致于有些人蔑视流行歌曲。

Gold: 最近 ， 一些 音乐 评论家 发表 轻视 流星歌曲 的 一些 观点 ， 有些 人 以致 蔑视 流行歌曲 。

D: 最近 ， 一些 音乐 评论家 发表 轻视 流星 歌曲 的 一些 观点 ， 有些 人 以致 蔑视 流行歌曲 。

P1: 最近 ， 一些 音乐 评论家 发表 轻视 流星 歌曲 的 一些 观点 ， 有些 人 以致 蔑视 流行歌曲 。

P2: 最近 ， 一些 音乐 评论家 发表 轻视 流星 歌曲 的 一些 观点 ， 有些 人 以致 蔑视 流行歌曲 。

Span: 流星歌曲

Explanation: D is over: 流星歌曲 -> 流星 / 歌曲. P1 is over: 流星歌曲 -> 流星 / 歌曲. P2 is over: 流星歌曲 -> 流星 / 歌曲.

## B B B / sentence_id: 884

Source: 特别是青少年和大学生对娱乐、流行歌曲非常敏感反应。他们总是围绕着这门话题。

Target: 特别是青少年和大学生对娱乐、流行歌曲非常敏感，他们总是围绕着这个话题。

Gold: 特别 是 青少年 和 大学生 对 娱乐 、 流行歌曲 非常 敏感 反应 。 他们 总是 围绕 着 这门 话题 。

D: 特别 是 青少年 和 大学生 对 娱乐 、 流行歌曲 非常 敏感 反应 。 他们 总是 围绕 着 这 门 话题 。

P1: 特别 是 青少年 和 大学生 对 娱乐 、 流行歌曲 非常 敏感 反应 。 他们 总是 围绕 着 这 门 话题 。

P2: 特别 是 青少年 和 大学生 对 娱乐 、 流行歌曲 非常 敏感 反应 。 他们 总是 围绕 着 这 门 话题 。

Span: 这门

Explanation: D is over: 这门 -> 这 / 门. P1 is over: 这门 -> 这 / 门. P2 is over: 这门 -> 这 / 门.

## B B B / sentence_id: 249

Source: 对待男人和女人的问题上，我觉得男人应该有男人午点，有责任感，有安全感，有事业心。

Target: 对待男人和女人的问题上，我觉得男人应该有男人味点，有责任感，有安全感，有事业心。

Gold: 对待 男人 和 女人 的 问题 上 ， 我 觉得 男人 应该 有 男人 午 点 ， 有 责任感 ， 有 安全感 ， 有 事业心 。

D: 对待 男人 和 女人 的 问题 上 ， 我 觉得 男人 应该 有 男人 午点 ， 有 责任感 ， 有 安全感 ， 有 事业心 。

P1: 对待 男人 和 女人 的 问题 上 ， 我 觉得 男人 应该 有 男人 午点 ， 有 责任感 ， 有 安全感 ， 有 事业心 。

P2: 对待 男人 和 女人 的 问题 上 ， 我 觉得 男人 应该 有 男人 午点 ， 有 责任感 ， 有 安全感 ， 有 事业心 。

Span: 午点

Explanation: D is under: 午 / 点 -> 午点. P1 is under: 午 / 点 -> 午点. P2 is under: 午 / 点 -> 午点.

## B B B / sentence_id: 834

Source: 我很想这种现象会实践，这种法律没有对人和社会坏处，而而对环境也好对人的身体也好。

Target: 我很想这种法律付诸实践，这种法律对人和社会没有坏处，而且对环境也好，对人的身体也好。

Gold: 我 很 想 这种 现象 会 实践 ， 这种 法律 没有 对 人 和 社会 坏处 ， 而而 对 环境 也好 对 人 的 身体 也好 。

D: 我 很 想 这种 现象 会 实践 ， 这种 法律 没有 对 人 和 社会 坏处 ， 而 而 对 环境 也好 对 人 的 身体 也好 。

P1: 我 很 想 这种 现象 会 实践 ， 这种 法律 没有 对 人 和 社会 坏处 ， 而 而 对 环境 也好 对 人 的 身体 也好 。

P2: 我 很 想 这种 现象 会 实践 ， 这种 法律 没有 对 人 和 社会 坏处 ， 而 而 对 环境 也好 对 人 的 身体 也好 。

Span: 而而

Explanation: D is over: 而而 -> 而 / 而. P1 is over: 而而 -> 而 / 而. P2 is over: 而而 -> 而 / 而.

## B B B / sentence_id: 111

Source: 她有两个姐姐、一个妹妹和西个哥哥。但是，在她的家只有西个养：父母、妹妹和她。他们有四个猫。

Target: 她有两个姐姐、一个妹妹和四个哥哥。但是，在她的家里只有四个人养猫：父母、妹妹和她。他们有四只猫。

Gold: 她 有 两 个 姐姐 、 一个 妹妹 和 西 个 哥哥 。 但是 ， 在 她 的 家 只 有 西 个 养 ： 父母 、 妹妹 和 她 。 他们 有 四 个 猫 。

D: 她 有 两 个 姐姐 、 一个 妹妹 和 西 个 哥哥 。 但是 ， 在 她 的 家 只 有 西个养 ： 父母 、 妹妹 和 她 。 他们 有 四 个 猫 。

P1: 她 有 两 个 姐姐 、 一个 妹妹 和 西 个 哥哥 。 但是 ， 在 她 的 家 只 有 西个养 ： 父母 、 妹妹 和 她 。 他们 有 四 个 猫 。

P2: 她 有 两 个 姐姐 、 一个 妹妹 和 西 个 哥哥 。 但是 ， 在 她 的 家 只 有 西 个养 ： 父母 、 妹妹 和 她 。 他们 有 四 个 猫 。

Span: 西个养

Explanation: D is under: 西 / 个 / 养 -> 西个养. P1 is under: 西 / 个 / 养 -> 西个养. P2 is under: 西 / 个 / 养 -> 西 / 个养.

## B B B / sentence_id: 111

Source: 她有两个姐姐、一个妹妹和西个哥哥。但是，在她的家只有西个养：父母、妹妹和她。他们有四个猫。

Target: 她有两个姐姐、一个妹妹和四个哥哥。但是，在她的家里只有四个人养猫：父母、妹妹和她。他们有四只猫。

Gold: 她 有 两 个 姐姐 、 一个 妹妹 和 西 个 哥哥 。 但是 ， 在 她 的 家 只 有 西 个 养 ： 父母 、 妹妹 和 她 。 他们 有 四 个 猫 。

D: 她 有 两 个 姐姐 、 一个 妹妹 和 西 个 哥哥 。 但是 ， 在 她 的 家 只 有 西个养 ： 父母 、 妹妹 和 她 。 他们 有 四 个 猫 。

P1: 她 有 两 个 姐姐 、 一个 妹妹 和 西 个 哥哥 。 但是 ， 在 她 的 家 只 有 西个养 ： 父母 、 妹妹 和 她 。 他们 有 四 个 猫 。

P2: 她 有 两 个 姐姐 、 一个 妹妹 和 西 个 哥哥 。 但是 ， 在 她 的 家 只 有 西 个养 ： 父母 、 妹妹 和 她 。 他们 有 四 个 猫 。

Span: 个养

Explanation: D is under: 个 / 养 -> . P1 is under: 个 / 养 -> . P2 is under: 个 / 养 -> 个养.

## B B B / sentence_id: 766

Source: 毕业以后，我打算继续读硕士。我的同学多部分都上大学了：有的学法律，有的学电脑，还有的学心理学。只有我学语言。

Target: 毕业以后，我打算继续读硕士。我的同学大部分都上大学了：有的学法律，有的学电脑，还有的学心理学，只有我学语言。

Gold: 毕业 以后 ， 我 打算 继续 读 硕士 。 我 的 同学 多部分 都 上 大学 了 ： 有的 学 法律 ， 有的 学 电脑 ， 还有 的 学 心理学 。 只有 我 学 语言 。

D: 毕业 以后 ， 我 打算 继续 读 硕士 。 我 的 同学 多 部分 都 上 大学 了 ： 有的 学 法律 ， 有的 学 电脑 ， 还有 的 学 心理学 。 只有 我 学 语言 。

P1: 毕业 以后 ， 我 打算 继续 读 硕士 。 我 的 同学 多 部分 都 上 大学 了 ： 有的 学 法律 ， 有的 学 电脑 ， 还有 的 学 心理学 。 只有 我 学 语言 。

P2: 毕业 以后 ， 我 打算 继续 读 硕士 。 我 的 同学 多 部分 都 上 大学 了 ： 有的 学 法律 ， 有的 学 电脑 ， 还有 的 学 心理学 。 只有 我 学 语言 。

Span: 多部分

Explanation: D is over: 多部分 -> 多 / 部分. P1 is over: 多部分 -> 多 / 部分. P2 is over: 多部分 -> 多 / 部分.

## Appendix-ready Examples

## Example 1: G B B / sentence_id: 232

Source: 昨天下雨很多。

Target: 昨天下了很多雨。

Gold: 昨天 下雨 很 多 。

D: 昨天 下雨 很 多 。

P1: 昨天 下雨 很多 。

P2: 昨天 下雨 很多 。

Pattern: G B B

Span: 很多

## Example 2: B B B / sentence_id: 631

Source: 所以我少就不理他了。

Target: 所以我就不理他了。

Gold: 所以 我 少就 不 理 他 了 。

D: 所以 我 少 就 不 理 他 了 。

P1: 所以 我 少 就 不 理 他 了 。

P2: 所以 我 少 就 不 理 他 了 。

Pattern: B B B

Span: 少就

## Example 3: B B G / sentence_id: 254

Source: 上次考试我的了初级5。

Target: 上次考试我得了初级5。

Gold: 上次 考试 我 的了 初级 5 。

D: 上次 考试 我 的 了 初级 5 。

P1: 上次 考试 我 的 了 初级 5 。

P2: 上次 考试 我 的了 初级 5 。

Pattern: B B G

Span: 的了

## Example 4: B G G / sentence_id: 74

Source: 这样的恶循环没完没了。

Target: 这样的恶性循环没完没了。

Gold: 这样 的 恶循环 没完没了 。

D: 这样 的 恶 循环 没完没了 。

P1: 这样 的 恶循环 没完没了 。

P2: 这样 的 恶循环 没完没了 。

Pattern: B G G

Span: 恶循环

## Example 5: B G G / sentence_id: 286

Source: 我本生喜欢听流行歌曲。

Target: 我本身喜欢听流行歌曲。

Gold: 我 本生 喜欢 听 流行歌曲 。

D: 我 本生 喜欢 听 流行 歌曲 。

P1: 我 本生 喜欢 听 流行歌曲 。

P2: 我 本生 喜欢 听 流行歌曲 。

Pattern: B G G

Span: 流行歌曲

## Example 6: G B G / sentence_id: 666

Source: 我朋友现在在泰国陆游。

Target: 我朋友现在在泰国旅游。

Gold: 我 朋友 现在 在 泰国 陆游 。

D: 我 朋友 现在 在 泰国 陆游 。

P1: 我 朋友 现在 在 泰国 陆 游 。

P2: 我 朋友 现在 在 泰国 陆游 。

Pattern: G B G

Span: 陆游
