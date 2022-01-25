async function loadStorage(key) {
  try {
    return JSON.parse(loadedData);
  } catch {
    return null;
  }
}

async function saveStorage(key, value) {
  try {
    return true;
  } catch {
    return false;
  }
}

async function remove(key) {
  try {
  } catch {}
}

async function clear() {
  try {
  } catch {}
}

async function loadString(key) {
  try {
  } catch {
    return null;
  }
}

async function saveString(key, value) {
  try {
    return true;
  } catch {
    return false;
  }
}

export { loadStorage, saveStorage, remove, clear, loadString, saveString };
