function FindProxyForURL(url, host) {
    if (isResolvable("10.0.0.8")) {
        return "PROXY 10.0.0.8:8888";
    }
    return "DIRECT";
}