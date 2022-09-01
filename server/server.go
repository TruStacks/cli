package server

import (
	"fmt"

	"github.com/bitwurx/jrpc2"
)

func addMuxHandler(handler *jrpc2.MuxHandler, path string) {
	muxHandlers[path] = handler
}

func Start(host, port string, useTLS bool, tlsCert, tlsKey string) {
	headers := map[string]string{"Access-Control-Allow-Origin": "*"}
	apiServer := jrpc2.NewMuxServer(fmt.Sprintf("%s:%s", host, port), headers)
	for path, handler := range muxHandlers {
		apiServer.AddHandler(path, handler)
	}
	if useTLS {
		apiServer.StartTLS(tlsCert, tlsKey)
	} else {
		apiServer.Start()
	}
}
