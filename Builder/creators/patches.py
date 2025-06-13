import os

class PatchSystemBugs:
    @staticmethod
    def enable_all_patches():
        PatchSystemBugs.__OMZ_install()
        PatchSystemBugs.__assign_permissions_to_configs()

    @staticmethod
    def __assign_permissions_to_configs():
        os.system("sudo chmod -R 700 ~/.config/*")

    @staticmethod
    def __OMZ_install():
        os.system('sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"')
        os.system('cp .zshrc ~/')
        os.system('git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions')
        os.system('git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting')
