{}:

let
  sources = import ./nix/sources.nix;
  pkgs = import sources.nixpkgs { };

  shell = pkgs.mkShell
    {
      buildInputs = [
        pkgs.nodejs-14_x
        #         pkgs.python38Packages.jsbeautifier
      ];
      nativeBuildInputs = [
        #         pkgs.libuuid
      ];
      shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
      '';
    };
in
{
  inherit shell;
}
