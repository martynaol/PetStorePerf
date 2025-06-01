FROM grafana/xk6:latest

RUN GCO_ENABLED=0 xk6 build \
    --with github.com/grafana/xk6-kubernetes@latest

RUN apt-get update && \
    apt-get install -y chromium

ENV K6_BROWSER_ENABLED=true
ENV XK6_HEADLESS=true

ENTRYPOINT ["./k6"]

