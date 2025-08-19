class Candidate {
  #name;
  #age;
  #candidateType;
  #party;
  #profession;
  #bio;
  #photoPath;

  constructor(name, age, candidateType, party, profession, bio, photoPath) {
    this.#name = name;
    this.#age = age;
    this.#candidateType = candidateType;
    this.#party = party;
    this.#profession = profession;
    this.#bio = bio
    this.#photoPath = photoPath
  }

  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }

  get candidateType() {
    return this.#candidateType;
  }

  get party() {
    return this.#party;
  }

  get profession() {
    return this.#profession;
  }

  get bio() {
    return this.#bio;
  }

  get photoPath() {
    return this.#photoPath;
  }
}

const bioSLAlves = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Integer maximus augue vel urna rhoncus, eget porttitor lorem tincidunt. In hac
habitasse platea dictumst. Nulla laoreet felis nisi, nec molestie dolor interdum
ut. Nullam dictum sem nec lacus suscipit, non sagittis neque suscipit.`;

const bioSCunha = `Proin ultrices, massa id porttitor finibus, mauris lorem
condimentum neque, et aliquam ligula metus nec nisi. Fusce at luctus orci.
Quisque auctor nibh orci, vitae facilisis magna egestas sed. Curabitur at turpis
neque.`;

const bioJOliveira = `Quisque sapien metus, scelerisque quis dolor non, gravida
finibus nisl. Sed at tortor ligula. Fusce et leo turpis. Suspendisse pellentesque
porta mi, et sodales eros dapibus suscipit.`;

const bioGFernandes = `Sed sed ante eget ex varius rhoncus. Maecenas a dui
pretium, condimentum arcu eget, commodo est. Donec consequat, ante vitae
ultricies tincidunt, enim tortor ultrices odio, id tristique mauris est ut dolor.
Maecenas tincidunt rutrum tortor in varius.`;

const bioFDalva = `Etiam mollis luctus scelerisque. Ut non pharetra mauris.
Curabitur arcu erat, pharetra eu congue sed, posuere ut quam. Suspendisse
lobortis ultricies nibh, et mattis arcu vulputate sit amet. Maecenas nec erat
lacinia, ornare nulla a, luctus nisl.`;

const bioMFreitas = `Etiam porttitor nec urna sit amet efficitur. Nulla ac odio
metus. Donec at purus eu neque tristique ultrices non eget ligula. Duis eget
efficitur erat. Mauris magna est, scelerisque sit amet metus nec, malesuada
interdum est. Donec sagittis sapien eleifend, egestas quam eu, placerat massa.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar tellus sit
amet gravida posuere.`;

const bioTLiberato = `Donec gravida id magna id malesuada. Aliquam rutrum mi sit
amet lorem rhoncus, eget consequat nunc scelerisque. Pellentesque neque purus,
volutpat non interdum nec, tincidunt at felis.`;

const bioJPinto = `Sed sed diam elit. Duis consectetur ultricies libero, id
vestibulum turpis fermentum vitae. Suspendisse lorem ex, tempus ut sagittis eu,
molestie id mauris.`;

const candidateSLAlves = new Candidate(
  "Sérgio Lourosa Alves",
  41,
  "CM",
  "LIVRE",
  "Professor, Cantor",
  bioSLAlves,
  "candidate-s-alves.JPG"
)

const candidateSCunha = new Candidate(
  "Sandra Cunha",
  99,
  "CM",
  "Bloco de Esquerda",
  "Unknown profession",
  bioSCunha,
  "candidate-s-cunha.png"
)

const candidateGFernandes = new Candidate(
  "Geizy Fernandes",
  99,
  "AM",
  "LIVRE",
  "Unknown profession",
  bioGFernandes,
  "candidate-g-fernandes.JPG"
)

const candidateJOliveira = new Candidate(
  "Jefferson Oliveira",
  34,
  "AM",
  "Bloco de Esquerda",
  "Professor, Ator",
  bioJOliveira,
  "candidate-j-oliveira.JPG"
)

const candidateFDalva = new Candidate(
  "Fausto D'Alva",
  99,
  "AF",
  "Bloco de Esquerda",
  "Unknown profession",
  bioFDalva,
  "candidate-f-dalva.JPG"
)

const candidatesMap = {
  "s-alves": candidateSLAlves,
  "s-cunha": candidateSCunha,
  "g-fernandes": candidateGFernandes,
  "j-oliveira": candidateJOliveira,
  "f-dalva": candidateFDalva
}

const radioInputs = document.getElementsByClassName("radio-candidate")

function changeCandidate(event) {
  const candidateImgEl = document.getElementById("candidate-picture")
  const candidateNameEl = document.getElementById("candidate-name")
  const candidatePartyEl = document.getElementById("candidate-party")
  const candidateProfessionEl = document.getElementById("candidate-profession")
  const candidateBioEl = document.getElementById("candidate-bio")
  const selectedCandidate = candidatesMap[event.target.value]

  candidateImgEl.src = "assets/" + selectedCandidate.photoPath
  candidateImgEl.alt = "Fotografia do candidato " + selectedCandidate.name
  candidateNameEl.innerText = selectedCandidate.name
  candidatePartyEl.innerText = selectedCandidate.party
  candidateBioEl.innerText = selectedCandidate.bio
  candidateProfessionEl.innerText = selectedCandidate.profession
}

function reflowNarrowScreen() {
  const pageTitleEl = document.getElementsByClassName("page-title")[0]
  const contentBoardEl = document.getElementById("content-board")
  const headerLogosEl = document.getElementsByClassName("logos")[0]

  const elementsToReflow = [
    pageTitleEl,
    contentBoardEl,
    headerLogosEl
  ]

  if (window.innerWidth <= 576) {
    for (let element of elementsToReflow) {
      element.classList.add("narrow-screen")
    }
  } else {
    for (let element of elementsToReflow) {
      element.classList.remove("narrow-screen")
    }
  }
}

function main() {
  for (let input of radioInputs) {
    input.addEventListener("change", changeCandidate)
  }

  reflowNarrowScreen()
  window.addEventListener("resize", reflowNarrowScreen)
}

main()
