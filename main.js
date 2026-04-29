const poems = [
{
    title: "Ever Since We've Met",
    author: "Anonymous",
    snippet: "We met somewhere ordinary,\nbut something in it refused to feel new...",
    body: `We met somewhere ordinary,
    but something in it refused to feel new.
    Like I had stood there before,
    like your presence already knew me.

    I joined, and just like that,
    the moment slipped into place.
    No noise, no grand arrival —
    just a quiet shift I couldn’t ignore.

    You stood there like it meant nothing,
    nonchalant, untouched by it all.
    While I was tracing echoes in the air,
    you were simply there, unbothered.

    But slowly, piece by piece,
    I began to know you more.
    Small things turning into something real,
    something I didn’t expect to stay.

    And somewhere along the way,
    without warning or design,
    you became a friend
    I probably can't afford to lose.`
},
{
    title: "At the Realm",
    author: "Anonymous",
    snippet: "In that realm, you were always there —\nand somehow, not there at all...",
    body: `In that realm, you were always there,
    and somehow, not there at all.
    Active in passing moments,
    pulled away by things beyond it.

    Still, we found space to talk,
    threads turning into something more.
    Conversations stretching a little longer,
    like time was learning our rhythm.

    And then you brought me along,
    into another name, another face.
    A quiet introduction, nothing grand,
    but it changed the shape of things.

    And there you were, still my friend,
    just closer now than before.
    Not louder, not different —
    just nearer in ways that stayed.

    That’s when I understood it:
    you are the kind of friend
    worth keeping through everything,
    no matter how things shift.`
},
{
    title: "A Disaster",
    author: "Anonymous",
    snippet: "The booth stood there, waiting for a moment that never came,\nand we tried to call it real anyway...",
    body: `The booth stood there,
    waiting for something official.
    We tried to force a moment into existence —
    but nothing answered back.

    What was meant to be simple
    turned into something heavier.
    Words landed wrong,
    and someone else felt it.

    I knew, even before any of this,
    that I was already standing where I shouldn’t.
    The person I kept quietly choosing
    had already chosen someone else.

    And suddenly, it wasn’t just us anymore.
    There were boundaries I couldn’t ignore,
    lines I never meant to cross,
    but somehow still did.

    And more than that,
    you weren’t standing alone either.
    There was someone you were entertaining,
    someone already in your orbit.

    So I stepped back first,
    before it could become worse.
    Not because I wanted distance —
    but because I had to choose it.

    You asked if I was leaving,
    and I didn’t know how to soften it.
    There are decisions that sound cruel,
    even when they’re meant to protect.

    I said people come and go,
    like it was something easy to accept.
    But behind those words
    was something I couldn’t say out loud.

    And even now, I still think —
    if things were just a little different,
    this wouldn’t have been a disaster,
    just another story we kept.

    You asked me to stay,
    quiet, almost breaking.
    So I said I would —
    even knowing what it might cost.`
},
{
    title: "One Day",
    author: "Anonymous",
    snippet: "I kept replaying what was said,\nlike there was something I missed between the lines...",
    body: `I kept replaying what was said,
    like there was something I missed.
    Between the pauses and the replies,
    something didn’t sit right.

    I wondered what it all meant,
    why everything felt heavier after.
    Then slowly, piece by piece,
    I realized what was underneath.

    At the beach, with nothing but distance,
    I asked you something I couldn’t ignore.
    “Are you afraid of losing me?”
    and you said yes.

    One word, simple and quiet,
    but it stayed longer than the waves.
    It carried something deeper
    than anything we said before.

    After that, I kept wondering,
    what happens to us now.
    If things change, or stay,
    or quietly fall apart.

    But instead of answers,
    there was only silence again.
    Not loud, not distant —
    just a kind of quiet that lingers.

    And somehow, without meaning to,
    it turned into something heavier.
    More of the same quiet sadness,
    the kind I never meant to cause.`
},
{
    title: "An Apology",
    author: "Anonymous",
    snippet: "I’m sorry I built quiet exits,\ninstead of choosing to stay and exist...",
    body: `I’m sorry I built silent exits to escape,
    pretending logic made everything easier to escape,
    I named them clauses to justify my escape,
    but deep down, I just wanted to escape.

    I’m sorry I became distant, quiet, and cold,
    as if nothing we had was worth trying to hold,
    I stood there unaffected, distant, and cold,
    while you carried emotions I chose not to hold.

    I didn’t see how deeply it would hurt,
    how simple words could quietly start to hurt,
    I treated feelings like problems that convert,
    when all you needed was something that wouldn’t hurt.

    I turned something fragile into something controlled,
    reduced what was real into something controlled,
    as if connection could be measured and controlled,
    instead of something alive, something uncontrolled.

    You had every right to feel angry inside,
    because I made it seem like I could easily slide,
    like everything we had could just easily slide,
    when you were someone I shouldn’t let slide.

    And now I see the damage I tried to hide,
    not just in words, but the way I tried to hide,
    how I almost let something real quietly hide,
    just because I was too afraid to stay, not hide.

    So hear me now, I am choosing to stay,
    not because I’m forced, but choosing to stay,
    whatever happens, I will still choose to stay,
    not planning an exit, just choosing to stay.

    No matter what comes or tries to sway,
    no matter the doubt that tries to sway,
    I won’t walk away or quietly sway,
    I’m here, and I am choosing to stay.`
}];

const list = document.getElementById('poems');
const reader = document.getElementById('reader');
const readerTitle = document.getElementById('readerTitle');
const readerMeta = document.getElementById('readerMeta');
const readerBody = document.getElementById('readerBody');
const closeBtn = document.getElementById('close');

poems.forEach((p, i) => {
    const card = document.createElement('button');
    card.className = 'card';
    card.style.animationDelay = `${i * 80}ms`;
    card.innerHTML = `
        <div class="card-num">No. ${String(i + 1).padStart(2, '0')}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-author">${p.author}</div>
        <div class="card-snippet">${p.snippet.replace(/\n/g, '<br>')}</div>
    `;
    card.addEventListener('click', () => openPoem(p, i));
    list.appendChild(card);
});

function openPoem(p, i) {
    readerMeta.textContent = `Poem No. ${String(i + 1).padStart(2, '0')} — ${p.author}`;
    readerTitle.textContent = p.title;
    readerBody.textContent = p.body;
    reader.scrollTop = 0;
    reader.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closePoem() {
    reader.hidden = true;
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closePoem);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePoem();
});
reader.addEventListener('click', (e) => {
    if (e.target === reader) closePoem();
});
